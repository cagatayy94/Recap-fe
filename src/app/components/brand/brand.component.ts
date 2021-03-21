import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brandModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  dataLoaded = false;
  currentBrand:Brand = {
    brandId:0,
    brandName:''
  }
  
  filterText:string = '';

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getBrandClass(brand: Brand){
    if(brand == this.currentBrand){
      return 'list-group-item  active';
    }
    return 'list-group-item';
  }
}
