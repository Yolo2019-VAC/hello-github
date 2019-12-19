import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sea-battle',
  templateUrl: './sea-battle.component.html',
  styleUrls: ['./sea-battle.component.scss']
})
export class SeaBattleComponent implements OnInit {

  S = 10;
  boards = {
   player: [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 10, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 20, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 20, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 40, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 40, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 40, 0, 0, 0, 30, 30, 30, 0, 0, 0 ],
    [ 40, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  ],
    enemy: [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 10, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 20, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 20, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 40, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 40, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 40, 0, 0, 0, 30, 30, 30, 0, 0, 0 ],
      [ 40, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    ]
  };
  constructor() { 
    // ToDo: two array 10x10 for Player & Enemy
  }

  myShot( r, c ) {
    if ( this.boards.enemy[r][c] == 0 ) {
      this.boards.enemy[r][c] = -100;
    }
    if ( this.boards.enemy[r][c] > 0 ) {
      this.boards.enemy[r][c] = - this.boards.enemy[r][c];
    }
    this.enShot();
  }

  enShot() {
    let r = 0; //
    let c = 0; //
    let Z = this.getZeros();
    if ( Z.length > 0 ) {
      let i = Math.floor( Z.length * Math.random() );
      r = Z[i][0]
      c = Z[i][1];
    }
    if ( this.boards.player[r][c] == 0) {
      this.boards.player[r][c] = -100;
    }
    if ( this.boards.player[r][c] > 0 ) {
      this.boards.player[r][c] = - this.boards.player[r][c];
    }
  }

  getZeros() {
    let Z = [];
    for ( let r=0; r < this.S; r++ ) {
     for ( let c=0; c < this.S; c++ ) {
        if ( this.boards.player[r][c] >= 0 ) {
          Z.push( [r,c] );
        }
      }
    }
    return Z;
  }

  ngOnInit() {
  }

}
