import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spot } from './spots';

@Injectable({
  providedIn: 'root',
})
export class SpotsService {
  constructor(private http: HttpClient) {}

  public getSpots() {
    return this.http.get('https://63220d7f362b0d4e7dc7b163.mockapi.io/spot');
  }

  url = 'https://63220d7f362b0d4e7dc7b163.mockapi.io/spot';
  postSpot(spot: Spot): Observable<any> {
    return this.http.post<Spot>(this.url, spot);
  }
}
