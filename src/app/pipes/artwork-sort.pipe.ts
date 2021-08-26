import { Pipe, PipeTransform } from '@angular/core';
import { Artwork } from '../models/art-work.model';

@Pipe({
  name: 'artworkSort'
})
export class ArtworkSortPipe implements PipeTransform {

  transform(array: Artwork[], field: string): Artwork[] {
    if (!Array.isArray(array)) {
      return;
    }
    if (field === 'default') {
      array.sort((a: Artwork, b: Artwork) => {
        return a.is_boosted ? -1 : 1;
      });
    } else {
      array.sort((a: Artwork, b: Artwork) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return array;
  }

}
