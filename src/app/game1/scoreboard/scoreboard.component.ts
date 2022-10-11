import { Component, OnInit } from '@angular/core';
import {GameKeeperService} from "../../game-keeper.service";
import {Game1Service} from "../game1.service";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(public gameKeeper: GameKeeperService, public game1: Game1Service) { }

  ngOnInit(): void {
  }

  private getScore(): number {
    let score: number = parseInt(this.game1.current_Card.title);
    this.game1.nextRound();
    return score;
}

  selectRed(){
    this.game1.current_Card.team = 'red';
    this.gameKeeper.score_red += this.getScore();
  }

  selectGreen(){
    this.game1.current_Card.team = 'green';
    this.gameKeeper.score_green += this.getScore();
  }

  selectBlue(){
    this.game1.current_Card.team = 'blue';
    this.gameKeeper.score_blue += this.getScore();
  }

  selectPurple(){
    this.game1.current_Card.team = 'purple';
    this.gameKeeper.score_purple += this.getScore();
  }


}
