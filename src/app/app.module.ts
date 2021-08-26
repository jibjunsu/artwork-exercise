import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { FormsModule } from '@angular/forms';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { ArtworkFilterPipe } from './pipes/artwork-filter.pipe';
import { ArtworkSortPipe } from './pipes/artwork-sort.pipe';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { NgxMasonryModule } from 'ng-masonry-layout';

@NgModule({
  declarations: [
    AppComponent,
    ItemsContainerComponent,
    ItemCardComponent,
    ArtworkFilterPipe,
    ArtworkSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NxGridModule,
    NxHeadlineModule,
    NxPaginationModule,
    NxFormfieldModule,
    NxDropdownModule,
    FormsModule,
    NxCardModule,
    NxCopytextModule,
    NxImageModule,
    NxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
