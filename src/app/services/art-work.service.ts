import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtWorkRequestOption, ArtWorkResponse } from '../models/art-work.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArtWorkService {

  constructor(private httpClient: HttpClient) {
  }

  get$(option?: ArtWorkRequestOption): Observable<ArtWorkResponse> {
    option  = {
      ...environment.artWorkRequestDefaultOption,
      ...option
    };
    const params = new URLSearchParams(option as Record<string, string>).toString();
    return this.httpClient.get<ArtWorkResponse>(`https://api.artic.edu/api/v1/artworks?${params}`);
  }
}
