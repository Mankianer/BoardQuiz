import { Component, OnInit } from '@angular/core';
import {GameKeeperService} from "../game-keeper.service";

export interface Score {
  name: string;
  score: number;
  text: string;
}

@Component({
  selector: 'app-transition-screen',
  templateUrl: './transition-screen.component.html',
  styleUrls: ['./transition-screen.component.css']
})
export class TransitionScreenComponent implements OnInit {


  constructor(public gameKeeper: GameKeeperService) { }

  ngOnInit(): void {
  }

  getScoreList(): Score[] {
    return [this.getRed(), this.getBlue(), this.getGreen(), this.getPurple()].sort((a,b) => b.score - a.score);
  }

  getRed(): Score{
    return {name: "red", score: this.gameKeeper.score_red, text: "Team Rot"}
  }

  getBlue(): Score{
    return {name: "blue", score: this.gameKeeper.score_blue, text: "Team Blau"}
  }

  getGreen(): Score{
    return {name: "green", score: this.gameKeeper.score_green, text: "Team Grün"}
  }

  getPurple(): Score{
    return {name: "purple", score: this.gameKeeper.score_purple, text: "Team Lila"}
  }

}
