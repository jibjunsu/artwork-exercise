import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../../models/art-work.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() info: Artwork;

  constructor() { }

  ngOnInit(): void {
  }

  getImage(info: Artwork): string {
    return `https://www.artic.edu/iiif/2/${info.image_id}/full/843,/0/default.jpg`;
  }

  onImgError($event: any): void {
    $event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/3/32/Art_Institute_of_Chicago_logo.svg';
  }

  getDateArt(info: Artwork): string {
    return info.date_start === info.date_end ? `${info.date_start}` : `${info.date_start} - ${info.date_end}`;
  }
}
