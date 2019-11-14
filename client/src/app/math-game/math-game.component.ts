import { Component, OnInit, HostListener } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-math-game',
  templateUrl: './math-game.component.html',
  styleUrls: ['./math-game.component.scss']
})
export class MathGameComponent implements OnInit {

  SxS = 4;
  msg='none';
  board = [
   [ 2, 2, 2, 0 ],
   [ 0, 2, 0, 2 ],
   [ 2, 0, 0, 0 ],
   [ 2, 0, 0, 2 ]
  ];

  constructor() { }

  mover( a ) {
    for (let c=0; c<this.SxS; c++) {
      for (let r=this.SxS-1; r>0; r--) {
        //step1
        if ( a[ r ] ==0 ) {
          let find_rNo_ne_0 = -1;
          for ( let ri=r+1; ri<this.SxS; ri++ ){
            if ( a [ ri ] > 0) {
              find_rNo_ne_0 = ri;
              break;
            }
          }
         if (find_rNo_ne_0>0) {
           a [ r ] = a[find_rNo_ne_0];
           a [ find_rNo_ne_0 ] = 0;
         }
        }
        //step2
        let find_rNo_eq_0 = -1;
        for ( let rj=r+1; rj<this.SxS; rj++) {
          if ( a[rj] == a[r]) {
            find_rNo_eq_0 = rj;
          }
          if ( a [rj] > 0 ) {
            break;
          }
        }
        if ( find_rNo_eq_0 > 0) { 
          a[r] += a[ find_rNo_eq_0 ];
          a[ find_rNo_eq_0 ] = 0;
        }
      }
      return a;
    }
  }
  getCol( cNo ) {
    let a =[];
    for ( let r=0; r <this.SxS; r++) {
      a.push( this.board[ r ][ cNo ] );
    }
    return a;
  }

  setCol( cNo, a ) {
    for ( let r=0; r <this.SxS; r++) {
      this.board[ r ][ cNo ] = a[ r ];
    }
  }
  getRow( rNo ) {
    return this.board[ rNo ];
  }
  setRow( rNo, a ) {
    this.board[ rNo ] = a;
  }

  ngOnInit() {
   // this.setRow( 3, [ 16,32,16,16] );
   // this.setRow( 3, this.getRow( 1 ) );
  }

  @HostListener('window:keydown.arrowup')
  onUp() {
   for ( let c=0; c < this.SxS; c++ ) {
     this.setCol( c, this.mover( this.getCol( c ) ) );
   }
  }
  @HostListener('window:keydown.arrowright')
  onRight() {
   for ( let r=0; r < this.SxS; r++ ) {
     this.setRow ( r, this.mover(this.getRow( r ).reverse() ).reverse() );
   }
  }
  @HostListener('window:keydown.arrowdown')
  onDown() {
    
  }
  @HostListener('window:keydown.arrowleft')
  onLeft() {
   for (let r=0; r < this.SxS; r++) {
     this.setRow( r, this.mover( this.getRow ( r ) ) );
   }
  }

} 
