import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresTableComponent } from './scores-table/scores-table.component';
import { MathGameComponent } from './math-game/math-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoresTableComponent,
    MathGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
