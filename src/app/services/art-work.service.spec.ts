import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ArtWorkService } from './art-work.service';

describe('ArtWorkService', () => {
  let service: ArtWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ArtWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
