import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brandModel';
import { Car } from 'src/app/models/carModel';
import { Color } from 'src/app/models/colorModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params=>{
      if(params["colorId"] || params['brandId']){
        this.getCarsFiltered(params["colorId"], params['brandId']);
      }else{
        this.getCars();
      }
    }))
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsFiltered(colorId: number, brandId: number) {
    this.carService.getCarsFiltered(colorId, brandId).subscribe((response) => {

      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
