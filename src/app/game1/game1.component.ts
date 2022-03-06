import { Component, OnInit } from '@angular/core';
import {Game1Service} from "./game1.service";


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {


  constructor(public game1: Game1Service) { }

  ngOnInit(): void {
  }

}
