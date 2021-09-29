import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { Artwork } from '../../models/art-work.model';

import { ItemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCardComponent],
      imports: [AppModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    component.info = {
      title: 'Skidmore',
      artist_title: 'Toshiko Takaezu',
      place_of_origin: 'Quakertown',
      date_start: 1990,
      date_end: 1990,
      medium_display: 'Glazed stoneware',
      style_titles: ['Modernism'],
    } as Artwork;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
