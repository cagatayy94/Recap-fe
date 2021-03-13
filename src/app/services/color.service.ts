import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private httpClient: HttpClient) {}
  getColors() {
    return this.httpClient.get<ColorResponseModel>(
      'https://localhost:24459/api/Colors/getall'
    );
  }
}
