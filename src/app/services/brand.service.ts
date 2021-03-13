import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:56426/api/Brands/getall';
  constructor(private httpClient: HttpClient) { }
  getBrands(){
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
