import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.scss']
})
export class MathGameComponent implements OnInit {


  msg='none';
  board = [
   [ 0, 0, 0, 0 ],
   [ 0, 2, 0, 0 ],
   [ 0, 0, 0, 0 ],
   [ 0, 0, 0, 2 ]
  ];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:keydown.arrowup')
  onUp() {
   console.log ( 'up' );
  }
  @HostListener('window:keydown.arrowright')
  onRight() {
   console.log ( 'right' );
  }
  @HostListener('window:keydown.arrowdown')
  onDown() {
   console.log ( 'down' );
  }
  @HostListener('window:keydown.arrowleft')
  onLeft() {
   console.log ( 'left' );
  }
  
}
