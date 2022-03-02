import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule],
  declarations: [AppComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
