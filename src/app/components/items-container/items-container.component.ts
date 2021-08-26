import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ArtWorkService } from '../../services/art-work.service';
import { Artwork, ArtWorkRequestOption, ArtWorkResponse } from '../../models/art-work.model';
import { BehaviorSubject, forkJoin, Observable, of, Subject, Subscription } from 'rxjs';
import { exhaust, exhaustMap, filter, map, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { NxDropdownOption, NxDropdownSelectChange } from '@aposin/ng-aquila/dropdown';
import { LoaderService } from '../../services/loader.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  page = 1;
  count = environment.maxItemsCount;
  perPage = environment.artWorkRequestDefaultOption.limit;

  artWorkSubject$ = new BehaviorSubject(null);
  destroy$ = new Subject();
  items$: Observable<Artwork[]> = new Observable<Artwork[]>();
  loading = true;

  selectedStyleFilters: string[];
  styleOption: NxDropdownOption[] = [];
  selectedSortBy = 'default';
  sortByOption: NxDropdownOption[] = [
    {label: 'Recommendation', value: 'default'},
    {label: 'Name', value: 'title'},
    {label: 'Artist', value: 'artist_title'},
    {label: 'Date', value: 'date_start'},
  ];

  constructor(
    private artWorkService: ArtWorkService,
    private loaderService: LoaderService
  ) {
  }

  ngOnInit(): void {
    this.items$ = this.artWorkSubject$.pipe(
      takeUntil(this.destroy$),
      switchMap((option: ArtWorkRequestOption) => this.artWorkService.get$(option).pipe(share())),
      map((response: ArtWorkResponse) => response.data),
      tap(this.setStyleFilterOption),
    );
  }

  ngAfterViewInit(): void {
    this.loaderService.isLoading$.subscribe((v) =>  this.loading = v);
  }

  setStyleFilterOption = (list: Artwork[]) => {
    const styleMap: { [label: string]: number } = {};
    for (const item of list) {
      for (const style of item.style_titles) {
        if (!styleMap[style]) {
          styleMap[style] = 0;
        }
        styleMap[style]++;
      }
    }
    this.styleOption = Object.entries(styleMap).map(([key, value]) =>  ({label: `${key} (${value})`, value: `${key}`}));
    this.selectedStyleFilters = [];
  }

  prevPage(): void {
    this.artWorkSubject$.next({page: --this.page});
  }

  nextPage(): void {
    this.artWorkSubject$.next({page: ++this.page});
  }

  goToPage(page: number): void {
    this.page = page;
    this.artWorkSubject$.next({page});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
