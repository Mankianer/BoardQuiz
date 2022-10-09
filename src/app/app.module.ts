import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CardComponent} from './game1/card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {Game1Component} from './game1/game1.component';
import {StartScreenComponent} from './start-screen/start-screen.component';
import {Game2Component} from './game2/game2.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TransitionScreenComponent} from './transition-screen/transition-screen.component';
import {PlaygroundComponent} from './game1/playground/playground.component';
import {ScoreboardComponent} from './game1/scoreboard/scoreboard.component';
import {ScoreboardComponentGame2} from "./game2/scoreboard/scoreboard-component-game2.component";
import {RowComponent} from './game2/row/row.component';
import {TimerComponent} from './timer/timer.component';
import {KeyboardShortcutsModule} from "ng-keyboard-shortcuts";

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, KeyboardShortcutsModule.forRoot()],
  declarations: [AppComponent, CardComponent, Game1Component, StartScreenComponent, Game2Component, TransitionScreenComponent, PlaygroundComponent, ScoreboardComponent, ScoreboardComponentGame2, RowComponent, TimerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
