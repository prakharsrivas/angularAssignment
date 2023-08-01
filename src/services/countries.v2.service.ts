import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class CountriesV2Service {
  baseUrl: string = 'https://restcountries.com/v2/region/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  getRegion(region: string): Observable<any> {
    return this.http.get(`${this.baseUrl+ region}`);
  }
}