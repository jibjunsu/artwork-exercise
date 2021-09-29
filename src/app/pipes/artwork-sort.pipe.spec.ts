import { Artwork } from '../models/art-work.model';
import { ArtworkSortPipe } from './artwork-sort.pipe';

describe('ArtworkSortPipe', () => {
  const pipe = new ArtworkSortPipe();
  const artworks = [
    {
      title: 'Skidmore',
      artist_title: 'Toshiko Takaezu',
      place_of_origin: 'Quakertown',
      date_start: 1990,
      date_end: 1990,
      medium_display: 'Glazed stoneware',
      style_titles: ['Modernism']
    },
    {
      title: 'Terrace and Observation Deck at the Moulin de Blute-Fin, Montmartre',
      artist_title: 'Vincent van Gogh',
      place_of_origin: 'Netherlands',
      date_start: 1887,
      date_end: 1887,
      medium_display: 'Oil on canvas, mounted on pressboard',
      style_titles: ['Post-Impressionism']
    },
    {
      title: 'Coverlet',
      artist_title: 'John Landis',
      place_of_origin: 'Pennsylvania',
      date_start: 1810,
      date_end: 1840,
      medium_display: 'Cotton and wool',
      style_titles: ['Modernism']
    },
    {
      title: 'Coverlet',
      artist_title: 'John Landis',
      place_of_origin: 'Pennsylvania',
      date_start: 1810,
      date_end: 1840,
      medium_display: 'Cotton and wool',
      style_titles: ['Modernism']
    }
  ] as Artwork[];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty list', () => {
    expect(pipe.transform(null as unknown as Artwork[], 'title')).toEqual([]);
  });

  it('should return sorted list correctly', () => {
    const titleSortResult = pipe.transform(artworks, 'title');
    expect(titleSortResult[0].title).toEqual('Coverlet');
    expect(titleSortResult[1].title).toEqual('Coverlet');
    expect(titleSortResult[2].title).toEqual('Skidmore');
    expect(titleSortResult[3].title).toEqual('Terrace and Observation Deck at the Moulin de Blute-Fin, Montmartre');

    const artistSortResult = pipe.transform(artworks, 'artist_title');
    expect(artistSortResult[0].artist_title).toEqual('John Landis');
    expect(artistSortResult[1].artist_title).toEqual('John Landis');
    expect(artistSortResult[2].artist_title).toEqual('Toshiko Takaezu');
    expect(artistSortResult[3].artist_title).toEqual('Vincent van Gogh');

    const dateSortResult = pipe.transform(artworks, 'date_start');
    expect(dateSortResult[0].date_start).toEqual(1810);
    expect(dateSortResult[1].date_start).toEqual(1810);
    expect(dateSortResult[2].date_start).toEqual(1887);
    expect(dateSortResult[3].date_start).toEqual(1990);
  });
});
