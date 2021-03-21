import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/colorModel';
import { ColorService } from 'src/app/services/color.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color = { colorId: 0, colorName: '' };
  dataLoaded = false;
  filterText:any = '';

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getColorClass(color: Color){
    if(color == this.currentColor){
      return 'list-group-item  active';
    }
    return 'list-group-item';
  }
}
