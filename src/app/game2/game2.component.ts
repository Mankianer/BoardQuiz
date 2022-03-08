import {Component, Inject, Input, OnInit} from '@angular/core';
import {Game2Service} from "./game2.service";

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

  @Input("rounds") rounds = "1";
  @Input("force-winner") forceWinner = "false";
  @Input("points") pointArray: number[] = [10];

  constructor(public game2: Game2Service) {
  }

  ngOnInit(): void {
    this.game2.maxRounds = Number.parseInt(this.rounds);
    this.game2.pointArray = this.pointArray;
  }

  counter() {
    return new Array(this.game2.maxRounds);
  }
}
