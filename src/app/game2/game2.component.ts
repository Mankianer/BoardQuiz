import {Component, Input, OnInit} from '@angular/core';
import {Game2Service} from "./game2.service";

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

  @Input("rounds") rounds = "1";

  constructor(public game2: Game2Service) { }

  ngOnInit(): void {
    this.game2.maxRounds = Number.parseInt(this.rounds);
  }

  counter() {
    return new Array(this.game2.maxRounds);
  }
}
