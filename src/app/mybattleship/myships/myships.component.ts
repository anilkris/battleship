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
  ngOnInit(): void {
     this.updateComputerShips();
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
   let    x = Math.floor(Math.random() * 10);
   let    y = Math.floor(Math.random() * 10);
   let    orientation = Math.floor(Math.random() * 2);
   const destroyer = this.updateComputerDestroyer(x, y, orientation);
   destroyer.forEach(x => this.computerShips.destroyer.push(x)) ;

   x = Math.floor(Math.random() * 10);
   y = Math.floor(Math.random() * 10);
   orientation = Math.floor(Math.random() * 2);
   const cruiser = this.updateComputerCruiser(x,y,orientation);
   cruiser.forEach(x => this.computerShips.cruiser.push(x)) ; 

   x = Math.floor(Math.random() * 10);
   y = Math.floor(Math.random() * 10);
   orientation = Math.floor(Math.random() * 2);
   const sub = this.updateComputerCruiser(x,y,orientation);
   sub.forEach(x => this.computerShips.submarine.push(x)) ;

   x = Math.floor(Math.random() * 10);
   y = Math.floor(Math.random() * 10);
   orientation = Math.floor(Math.random() * 2);
   const battleship = this.updateComputerBattleship(x,y,orientation);
   battleship.forEach(x => this.computerShips.battleship.push(x)) ;

   x = Math.floor(Math.random() * 10);
   y = Math.floor(Math.random() * 10);
   orientation = Math.floor(Math.random() * 2);
   const carrier = this.updateComputerCarrier(x,y,orientation);
   carrier.forEach(x => this.computerShips.carrier.push(x)) ;





   console.log('Computer Ships' + JSON.stringify(this.computerShips, null, 2));
  }

  updateComputerDestroyer(x, y, orientation): any[] {
    let xy = '';
    xy = this.rows[x] + (y + 1);
    const destroyer = [];

    destroyer.push(xy);

    if (orientation === 0) {
          if (y <= 8) {
            xy = this.rows[x] + (y + 2);
            destroyer.push(xy);
          } else {
            xy = this.rows[x] + (y);
            destroyer.push(xy);

          }
    } else {
          if (x <= 8) {
            xy = this.rows[x + 1] + (y + 1);
            destroyer.push(xy);
          } else {
            xy = this.rows[x - 1] + (y + 1);

            destroyer.push(xy);
          }

    }
    return destroyer;
  }

 updateComputerCruiser(x, y, orientation): any[] {
    let xy = '';
    xy = this.rows[x] + (y + 1);
    const cruiser = [];

    cruiser.push(xy);

    if (orientation === 0) {
          if (y <= 7) {
            xy = this.rows[x] + (y + 2);
            cruiser.push(xy);
            xy = this.rows[x] + (y + 3);
            cruiser.push(xy);
          } else {
            xy = this.rows[x] + (y);
            cruiser.push(xy);
            xy = this.rows[x] + (y - 1);
            cruiser.push(xy);

          }
    } else {
          if (x <= 7) {
            xy = this.rows[x + 1] + (y + 1);
            cruiser.push(xy);

            xy = this.rows[x + 2] + (y + 1);
            cruiser.push(xy);
          } else {
            xy = this.rows[x - 1] + (y + 1);
            cruiser.push(xy);
            xy = this.rows[x - 2] + (y + 1);
            cruiser.push(xy);
 
          }

    }
    return cruiser;
  }

 
  updateComputerBattleship(x, y, orientation): any[] {
    let xy = '';
    xy = this.rows[x] + (y + 1);
    const battleship = [];

    battleship.push(xy);

    if (orientation === 0) {
          if (y <= 6) {
            xy = this.rows[x] + (y + 2);
            battleship.push(xy);

            xy = this.rows[x] + (y + 3);
            battleship.push(xy);

            xy = this.rows[x] + (y + 4);
            battleship.push(xy);
          } else {
            xy = this.rows[x] + (y);
            battleship.push(xy);
            xy = this.rows[x] + (y - 1);
            battleship.push(xy);

            xy = this.rows[x] + (y - 2);
            battleship.push(xy);

          }
    } else {
          if (x <= 6) {
            xy = this.rows[x + 1] + (y + 1);
            battleship.push(xy);

            xy = this.rows[x + 2] + (y + 1);
            battleship.push(xy);

            xy = this.rows[x + 3] + (y + 1);
            battleship.push(xy);
          } else {
            xy = this.rows[x - 1] + (y + 1);
            battleship.push(xy);

            xy = this.rows[x - 2] + (y + 1);
            battleship.push(xy);

            xy = this.rows[x - 3] + (y + 1);
            battleship.push(xy);
 
          }

    }
    return battleship;
  }


 
  updateComputerCarrier(x, y, orientation): any[] {
    let xy = '';
    xy = this.rows[x] + (y + 1);
    const carrier = [];

    carrier.push(xy);

    if (orientation === 0) {
          if (y <= 5) {
            xy = this.rows[x] + (y + 2);
            carrier.push(xy);

            xy = this.rows[x] + (y + 3);
            carrier.push(xy);

            xy = this.rows[x] + (y + 4);
            carrier.push(xy);

            xy = this.rows[x] + (y + 5);
            carrier.push(xy);

          } else {
            xy = this.rows[x] + (y);
            carrier.push(xy);
            xy = this.rows[x] + (y - 1);
            carrier.push(xy);

            xy = this.rows[x] + (y - 2);
            carrier.push(xy);

            xy = this.rows[x] + (y - 3);
            carrier.push(xy);

          }
    } else {
          if (x <= 5) {
            xy = this.rows[x + 1] + (y + 1);
            carrier.push(xy);

            xy = this.rows[x + 2] + (y + 1);
            carrier.push(xy);

            xy = this.rows[x + 3] + (y + 1);
            carrier.push(xy);

            xy = this.rows[x + 4] + (y + 1);
            carrier.push(xy);
            
          } else {
            xy = this.rows[x - 1] + (y + 1);
            carrier.push(xy);
            xy = this.rows[x - 2] + (y + 1);
            carrier.push(xy);

            xy = this.rows[x - 3] + (y + 1);
            carrier.push(xy);
 
            xy = this.rows[x - 4] + (y + 1);
            carrier.push(xy);
          }

    }
    return carrier;
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
    console.log(JSON.stringify(this.myShips, null , 2 ));
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
