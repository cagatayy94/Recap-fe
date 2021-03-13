import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private httpClient: HttpClient) { }
  getCars(){
    return this.httpClient.get<CarResponseModel>('https://localhost:24459/api/Cars/getcardetails')
  }
}