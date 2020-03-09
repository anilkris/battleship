export class Grid {
    x: number;
    y: number;
    partofShip: string;
    type: string;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


export class PlaceOfShips {
  submarine: string[];
  destroyer: string[];
  cruiser: string[];
  battleship: string[];
  carrier: string[];
  constructor() {

  this.submarine = [];
  this.destroyer = [];
  this.cruiser = [];
  this.battleship = [];
  this.carrier = [];

  }
}
