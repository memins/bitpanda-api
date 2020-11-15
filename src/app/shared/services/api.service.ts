import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://api.bitpanda.com/v1/masterdata';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDatafromApi(): Observable<any> {
    return this.http.get(API_URL);
  }
}
