import { Component, OnInit } from '@angular/core';
import {Game1Service} from "../game1.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {


  constructor(public game1: Game1Service) { }

  ngOnInit(): void {
  }

}
