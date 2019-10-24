import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first app';
  author = 'YOLO2019-VAC';
  heroes = [
   'Super Hero',
   'Hero',
   'Looser'  
   ];
}
