import { Component, OnInit } from '@angular/core';
import FragenBeispiel from '../../assets/beispielFragen.json';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

  fragen = FragenBeispiel;

  constructor() { }

  ngOnInit(): void {
  }

}
