import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { CarResponseModel } from '../models/carResponseModel';
import { CarImageResponseModel } from '../models/carImageResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = "https://localhost:56426/api/";
  constructor(private httpClient: HttpClient) { }
  getCars(){
    return this.httpClient.get<CarResponseModel>(this.baseUrl + 'Cars/getcardetails')
  }
  getCarsFiltered(colorId:any, brandId:any){
    let params = new HttpParams();
    let url = this.baseUrl + 'Cars/getcardetailsbycoloridandbrandid?';
    if (colorId) {
      params = params.append('colorId', colorId);
    }
    if (brandId) {
      params = params.append('brandId', brandId);
    }
    return this.httpClient.get<CarResponseModel>(url, {params: params});
  }
  getCarDetails(carId:number){
    let url = this.baseUrl + "Cars/getcardetail?carId="+carId;
    return this.httpClient.get<CarResponseModel>(url);
  }
  getCarImages(carId:number){
    let url = this.baseUrl + "CarImages/getimagesbycarid?carId="+carId;
    return this.httpClient.get<CarImageResponseModel>(url);
  }
}