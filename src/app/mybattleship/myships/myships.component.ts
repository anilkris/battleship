import { Component, OnInit } from '@angular/core';
import { Grid,  PlaceOfShips } from '../grid';
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
export class MyshipsComponent implements OnInit {
  ngOnInit(): void {
    this.updateComputerShips();
  }
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

  myShips: PlaceOfShips = new PlaceOfShips();
  computerShips: PlaceOfShips = new PlaceOfShips();

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
    this.ship = DESTROYER;
    this.isDestroyerDisabled = true;
  }

  onCruiserClick() {
    this.ship = CRUISER;

    this.isCruiserDisabled = true;
  }

  onSubmarineClick() {
    this.ship = SUBMARINE;
    this.isSubmarineDisabled = true;
  }

  onBattleshipClick() {
    this.ship = BATTLESHIP;

    this.isBattleshipDisabled = true;
  }

  onCarrierClick() {
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
      this.updateMyShips(x, y, this.ship);
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

  updateComputerShips() {
   const    x = Math.floor(Math.random() * 10);
   const    y = Math.floor(Math.random() * 10);
   const    orientation = Math.floor(Math.random() * 2);
   this.updateComputerDestroyer(x, y, orientation);

   console.log(JSON.stringify(this.computerShips,null,2));
  }

  updateComputerDestroyer(x, y, orientation) {
    let xy = '';
    xy = this.rows[x] + (y + 1);
    this.computerShips.destroyer.push(xy);

    if (orientation == 0) {
       if (x <= 8) {
        xy = this.rows[x + 1] + y;
        this.computerShips.destroyer.push(xy);
        } else {
          if (y <= 8) {
            xy = this.rows[x] + (y + 2);
            this.computerShips.destroyer.push(xy);
          } else {
            xy = this.rows[x] + (y - 1);
            this.computerShips.destroyer.push(xy);
          }
       }
    } else {

      if (y <= 8) {
        xy = this.rows[x] + (y + 1);
        this.computerShips.destroyer.push(xy);
        } else {
          if (x <= 8) {
            xy = this.rows[x + 1] + (y);
            this.computerShips.destroyer.push(xy);
          } else {
            xy = this.rows[x - 1] + (y - 1);
            this.computerShips.destroyer.push(xy);
          }
       }

    }
  }

  updateMyShips(x, y, ship) {
    let xy = '';
    y = y + 1;
    switch (ship) {
      case DESTROYER:
            xy = this.rows[x] + y  ;
            this.myShips.destroyer.push(xy);
            break;
      case BATTLESHIP:
            xy =  this.rows[x] + y;
            this.myShips.battleship.push(xy);
            break;
      case CRUISER:
            xy =  this.rows[x] + y;
            this.myShips.cruiser.push(xy);
            break;
      case CARRIER:
            xy =  this.rows[x] + y;
            this.myShips.carrier.push(xy);
            break;
      case SUBMARINE:
            xy =  this.rows[x] + y;
            this.myShips.submarine.push(xy);
            break;


    }
    console.log(JSON.stringify(this.myShips));
  }

  placeDestroyer(x, y) {
    this.grids[x][y].type = this.ship;
    this.grids[x][y].partofShip = this.ship;

    this.updateMyShips(x, y, this.ship);
  }
  placeSubCruiser(x, y, type) {

    if (this.grids[x - 1][y].partofShip === type) {
    this.grids[x][y].type = this.ship;
    this.grids[x][y].partofShip = this.ship;

    this.grids[x + 1][y].type = this.ship;
    this.grids[x + 1][y].partofShip = this.ship;

    this.updateMyShips(x, y, this.ship);
    this.updateMyShips(x + 1, y, this.ship);

    } else if (this.grids[x][y - 1].partofShip === type) {
    this.grids[x][y].type = this.ship;
    this.grids[x][y].partofShip = this.ship;

    this.grids[x][y + 1].type = this.ship;
    this.grids[x][y + 1].partofShip = this.ship;

    this.updateMyShips(x , y, this.ship);
    this.updateMyShips(x , y + 1, this.ship);

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

      this.updateMyShips(x , y, this.ship);
      this.updateMyShips(x + 1 , y, this.ship);
      this.updateMyShips(x + 2 , y, this.ship);


     } else if (this.grids[x][y - 1].partofShip === BATTLESHIP) {
      this.grids[x][y].type = this.ship;
      this.grids[x][y].partofShip = this.ship;

      this.grids[x ][y + 1].type = this.ship;
      this.grids[x ][y + 1].partofShip = this.ship;

      this.grids[x ][y + 2].type = this.ship;
      this.grids[x ][y + 2].partofShip = this.ship;

      this.updateMyShips(x , y, this.ship);
      this.updateMyShips(x  , y + 1, this.ship);
      this.updateMyShips(x  , y + 2, this.ship);

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

      this.updateMyShips(x , y, this.ship);
      this.updateMyShips(x + 1  , y, this.ship);
      this.updateMyShips(x + 2  , y, this.ship);
      this.updateMyShips(x + 3  , y, this.ship);

     } else if (this.grids[x][y - 1].partofShip === CARRIER) {
      this.grids[x][y].type = this.ship;
      this.grids[x][y].partofShip = this.ship;

      this.grids[x ][y + 1].type = this.ship;
      this.grids[x ][y + 1].partofShip = this.ship;

      this.grids[x ][y + 2].type = this.ship;
      this.grids[x ][y + 2].partofShip = this.ship;

      this.grids[x ][y + 3].type = this.ship;
      this.grids[x ][y + 3].partofShip = this.ship;

      this.updateMyShips(x , y, this.ship);
      this.updateMyShips(x  , y + 1, this.ship);
      this.updateMyShips(x  , y + 2, this.ship);
      this.updateMyShips(x  , y + 3, this.ship);



     }

  }


    GetClassDetails(y, x) {

    return this.grids[x][y].partofShip;
  }

}
