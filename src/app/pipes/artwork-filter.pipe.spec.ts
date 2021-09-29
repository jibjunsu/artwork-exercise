import { Artwork } from '../models/art-work.model';
import { ArtworkFilterPipe } from './artwork-filter.pipe';

describe('ArtworkFilterPipe', () => {
  const pipe = new ArtworkFilterPipe();
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
    }
  ] as Artwork[];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return filter out irrelevant items', () => {
    expect(pipe.transform(artworks, ['Modernism'], false).length).toBe(2);
    expect(pipe.transform(artworks, ['Modernism', 'Post-Impressionism'], false).length).toBe(3);
  });

  it('should return empty list if the loading is in progress', () => {
    expect(pipe.transform(artworks, ['Modernism'], true)).toEqual([]);
  });

  it('should return original artwork list if the list or style is not defined', () => {
    expect(pipe.transform(artworks, [], false)).toEqual(artworks);
  });
});
