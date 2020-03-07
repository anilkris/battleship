import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid';

@Component({
  selector: 'app-myships',
  templateUrl: './myships.component.html',
  styleUrls: ['./myships.component.scss']
})
export class MyshipsComponent {
  grids: Grid[][];
  columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  constructor() {
    this.gridInit();
  }
  gridInit() {
    this.grids = [];
    for (let i = 0; i < 10; i++) {
      this.grids[i] = [];
      for (let j = 0; j < 10; j++) {
        this.grids[i][j] = new Grid(i, j);

      }
    }
  }


}
