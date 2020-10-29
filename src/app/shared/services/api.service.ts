import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attributes, ApiInterface } from '../models/api.interface';

const API_URL = 'https://api.bitpanda.com/v1/masterdata';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDatafromApi() {
    return this.http.get<ApiInterface[]>(API_URL);
  }
}
