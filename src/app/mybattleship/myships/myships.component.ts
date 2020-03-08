import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid';
const SUBMARINE = 'submarine';
const DESTROYER = 'destroyer';
const CRUISER = 'cruiser';
const BATTLESHIP = 'battleship';
const CARRIER = 'carrier';
@Component({
  selector: 'app-myships',
  templateUrl: './myships.component.html',
  styleUrls: ['./myships.component.scss']
})
export class MyshipsComponent {
  grids: Grid[][];
  columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  ship = '';
  placingStarted = false;
  isDestroyerDisabled = false;
  isCruiserDisabled = false;
  isSubmarineDisabled = false;
  isCarrierDisabled = false;
  isBattleshipDisabled = false;

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

  onDestroyerClick() {
    console.log('on Destroyer clicked');
    this.ship = DESTROYER;
    this.isDestroyerDisabled = true;
  }

  onCruiserClick() {
    console.log('on Cruiser clicked');
    this.ship = CRUISER;

    this.isCruiserDisabled = true;
  }

  onSubmarineClick() {
    console.log('on Submarine clicked');
    this.ship = SUBMARINE;
    this.isSubmarineDisabled = true;
  }

  onBattleshipClick() {
    console.log('on Battleship clicked');
    this.ship = BATTLESHIP;

    this.isBattleshipDisabled = true;
  }

  onCarrierClick() {
    console.log('on Carrier clicked');
    this.ship = CARRIER;
    this.isCarrierDisabled = true;
  }

  onCellClick(x, y) {
    console.log(x, y);
    console.log(this.grids[x][y]);
    if (!this.placingStarted) {
      this.placingStarted = true;
      this.grids[x][y].type = this.ship;
      this.grids[x][y].partofShip = this.ship;
    } else {

      switch (this.ship) {
        case DESTROYER:
                      this.placeDestroyer(x, y);
                      this.placingStarted = false;
                      this.ship = '';
                      break;
        case BATTLESHIP:
                      this.placeBattleShip(x, y);
                      this.placingStarted = false;

                      this.ship = '';
                      break;
        case SUBMARINE:
                      this.placeSubCruiser(x, y, SUBMARINE);
                      this.placingStarted = false;

                      this.ship = '';
                      break;
        case CRUISER:
                      this.placeSubCruiser(x, y, CRUISER);
                      this.placingStarted = false;
                      this.ship = '';
                      break;
        case CARRIER:
                      this.placeCarrier(x, y);
                      this.placingStarted = false;

                      this.ship = '';
                      break;



      }
    }

  }

  placeDestroyer(x, y) {
    this.grids[x][y].type = this.ship;
    this.grids[x][y].partofShip = this.ship;
  }
  placeSubCruiser(x, y, type) {

    if (this.grids[x - 1][y].partofShip === type) {
    this.grids[x][y].type = this.ship;
    this.grids[x][y].partofShip = this.ship;

    this.grids[x + 1][y].type = this.ship;
    this.grids[x + 1][y].partofShip = this.ship;

    } else if (this.grids[x][y - 1].partofShip === type) {
    this.grids[x][y].type = this.ship;
    this.grids[x][y].partofShip = this.ship;

    this.grids[x][y + 1].type = this.ship;
    this.grids[x][y + 1].partofShip = this.ship;

    }

  }



  placeBattleShip(x, y) {
    if (this.grids[x - 1][y].partofShip === BATTLESHIP) {
      this.grids[x][y].type = this.ship;
      this.grids[x][y].partofShip = this.ship;

      this.grids[x + 1][y].type = this.ship;
      this.grids[x + 1][y].partofShip = this.ship;

      this.grids[x + 2][y].type = this.ship;
      this.grids[x + 2][y].partofShip = this.ship;
     } else if (this.grids[x][y - 1].partofShip === BATTLESHIP) {
      this.grids[x][y].type = this.ship;
      this.grids[x][y].partofShip = this.ship;

      this.grids[x ][y + 1].type = this.ship;
      this.grids[x ][y + 1].partofShip = this.ship;

      this.grids[x ][y + 2].type = this.ship;
      this.grids[x ][y + 2].partofShip = this.ship;

     }

  }
  placeCarrier(x, y) {
    if (this.grids[x - 1][y].partofShip === CARRIER) {
      this.grids[x][y].type = this.ship;
      this.grids[x][y].partofShip = this.ship;

      this.grids[x + 1][y].type = this.ship;
      this.grids[x + 1][y].partofShip = this.ship;

      this.grids[x + 2][y].type = this.ship;
      this.grids[x + 2][y].partofShip = this.ship;

      this.grids[x + 3][y].type = this.ship;
      this.grids[x + 3][y].partofShip = this.ship;

     } else if (this.grids[x][y - 1].partofShip === CARRIER) {
      this.grids[x][y].type = this.ship;
      this.grids[x][y].partofShip = this.ship;

      this.grids[x ][y + 1].type = this.ship;
      this.grids[x ][y + 1].partofShip = this.ship;

      this.grids[x ][y + 2].type = this.ship;
      this.grids[x ][y + 2].partofShip = this.ship;

      this.grids[x ][y + 3].type = this.ship;
      this.grids[x ][y + 3].partofShip = this.ship;

     }

  }


    GetClassDetails(y, x) {
    if (this.grids[x][y].partofShip) {

      console.log(this.grids[x][y].partofShip);
    }
    return this.grids[x][y].partofShip;
  }

}
