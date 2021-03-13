import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private httpClient: HttpClient) {}
  getRentals() {
    return this.httpClient.get<RentalResponseModel>(
      'https://localhost:56426/api/Rentals/getallwithdetails'
    );
  }
}
