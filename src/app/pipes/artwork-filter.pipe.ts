import { Pipe, PipeTransform } from '@angular/core';
import { Artwork } from '../models/art-work.model';

@Pipe({
  name: 'artworkFilter'
})
export class ArtworkFilterPipe implements PipeTransform {

  transform(artworks: Artwork[], styleList: string[], isLoading: boolean): Artwork[] {
    if (isLoading) {
      return [];
    }
    if (!styleList || styleList?.length <= 0) {
      return artworks;
    }
    return artworks?.filter(item => {
      for (const s of styleList) {
        if (item.style_titles.includes(s)) {
          return true;
        }
      }
      return false;
    });
  }

}
