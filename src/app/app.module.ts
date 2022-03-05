import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { Game1Component } from './game1/game1.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { EndScreenComponent } from './end-screen/end-screen.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [AppComponent, CardComponent, Game1Component, StartScreenComponent, Game2Component, Game3Component, EndScreenComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
