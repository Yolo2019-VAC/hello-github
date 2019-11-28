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
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ]
    ],
    enemy: [
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ],
      [ 1,1,1,1,1,1,1,1,1,1 ]
    ]
  };
  constructor() { 
    // ToDo: two array 10x10 for Player & Enemy
  }

  ngOnInit() {
  }

}
