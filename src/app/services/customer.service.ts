import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    return this.httpClient.get<CustomerResponseModel>(
      'https://localhost:56426/api/Customers/getallwithdetails'
    );
  }
}