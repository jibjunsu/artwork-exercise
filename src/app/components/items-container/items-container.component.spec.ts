import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { AppModule } from '../../app.module';
import { CacheInterceptor } from '../../interceptors/cache.interceptor';
import { LoaderInterceptor } from '../../interceptors/loader-interceptor.service';
import { ArtworkSortPipe } from '../../pipes/artwork-sort.pipe';

import { ItemsContainerComponent } from './items-container.component';

describe('ItemsContainerComponent', () => {
  let component: ItemsContainerComponent;
  let fixture: ComponentFixture<ItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsContainerComponent],
      imports: [AppModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
