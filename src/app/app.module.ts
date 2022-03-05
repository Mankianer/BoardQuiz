import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { Game1Component } from './game1/game1.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule],
  declarations: [AppComponent, CardComponent, Game1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
