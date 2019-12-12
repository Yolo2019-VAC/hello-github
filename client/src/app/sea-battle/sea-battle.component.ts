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
    console.log(this.boards.enemy[r][c]);
  }

  enShot() {
    let r = 1; //
    let c = 1; //
    if ( this.boards.player[r][c] == 0 ) {
      this.boards.player[r][c] = -100;
    }
    if ( this.boards.player[r][c] > 0 ) {
      this.boards.player[r][c] = - this.boards.player[r][c];
    }
  }

  ngOnInit() {
  }

}
