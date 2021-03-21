import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brandModel';
import { Color } from 'src/app/models/colorModel';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color = {
    colorId: 0,
    colorName: '',
  };
  brands: Brand[] = [];
  currentBrand: Brand = {
    brandId: 0,
    brandName: '',
  };
  valid:boolean = false;
  constructor(
    private brandService: BrandService,
    private colorService: ColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  onSubmit(f: NgForm) {
    this.valid = f.valid ? f.valid : false;
    this.router.navigate(
      ['../cars',  ],
      {queryParams: {brandId: f.value.brand, colorId: f.value.color}});
  }
}
