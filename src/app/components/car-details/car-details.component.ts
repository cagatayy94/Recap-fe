import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImageModel } from 'src/app/models/carImageModel';
import { Car } from 'src/app/models/carModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars: Car[] = [];  
  carImages: CarImageModel[] = [];  
  carLoaded = false;
  carImageLoaded = false;
  constructor(private activatedRoute:ActivatedRoute,private carService: CarService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
        this.getCarImages(params["carId"]);
      }else{
        return;
      }
    }))
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe((response=>{
      this.cars = response.data;
      this.carLoaded = true;
      console.log(response)
    }));
  }

  getCarImages(carId:number){
    this.carService.getCarImages(carId).subscribe((response=>{
      this.carImages = response.data;
      this.carImageLoaded = true;
      console.log(response)
    }));
  }
}
