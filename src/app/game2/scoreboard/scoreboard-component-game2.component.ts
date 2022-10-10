import {Component, OnInit} from '@angular/core';
import {GameKeeperService} from "../../game-keeper.service";
import {Game1Service} from "../../game1/game1.service";

@Component({
  selector: 'app-scoreboard-horizontal',
  templateUrl: './scoreboard-component-game2.component.html',
  styleUrls: ['./scoreboard-component-game2.component.css']
})
export class ScoreboardComponentGame2 implements OnInit {

  constructor(public gameKeeper: GameKeeperService, public game1: Game1Service) {

  }

  ngOnInit(): void {
  }

}
