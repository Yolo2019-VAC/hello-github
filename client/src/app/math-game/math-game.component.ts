import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.scss']
})
export class MathGameComponent implements OnInit {

  SxS = 4;
  msg='none';
  board = [
   [ 0, 0, 0, 0 ],
   [ 0, 2, 0, 2 ],
   [ 0, 0, 2, 0 ],
   [ 2, 0, 0, 2 ]
  ];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:keydown.arrowup')
  onUp() {
    // sum numbers
    // shift numbers
    for (let c=0; c<this.SxS; c++) {
      for (let r=this.SxS-1; r>0; r--) {
        //step1
        if ( this.board[r][c]==0) {
          let find_rNo_ne_0 = -1;
          for ( let ri=r+1; ri; ri++){
            if ( this.board[ri][c]>0) {
              find_rNo_ne_0 = ri;
              break;
            }
          }
         if (find_rNo_ne_0>0) {
           this.board[r][c]=this.board[find_rNo_ne_0][c];
           this.board[find_rNo_ne_0][c] = 0;
         }
        }
        //step2
        let find_rNo_eq_0 = -1;
        for ( let rj=r+1; rj<this.SxS; rj++) {
          if ( this.board[rj][c]==this.board[r][c]) {
            find_rNo_eq_0 = rj;
          }
          if ( this.board[rj][c]>0) {
            break;
          }
        }
        if ( find_rNo_eq_0>0) { 
          this.board[r][c]+=this.board[find_rNo_eq_0][c];
          this.board[find_rNo_eq_0][c] = 0;
        }
      }
    }
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
