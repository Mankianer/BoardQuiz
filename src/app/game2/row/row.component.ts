import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Game2Service} from "../game2.service";
import {GameKeeperService} from "../../game-keeper.service";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input("round") round: number = 0;
  @Input("force-winner") forceWinner = "false";
  @Input("points") points: number = 0;

  winner = "";

  constructor( public game2: Game2Service, public gameKeeper: GameKeeperService) { }

  ngOnInit(): void {
    this.points = this.game2.getPointsForRound(this.round);
  }

  selectRed() {
    this.winner = 'red';
    this.gameKeeper.score_red += this.points;
    this.game2.nextTurn();
  }

  selectGreen() {
    this.winner = 'green';
    this.gameKeeper.score_green += this.points;
    this.game2.nextTurn();
  }

  selectBlue() {
    this.winner = 'blue';
    this.gameKeeper.score_blue += this.points;
    this.game2.nextTurn();
  }

  selectPurple() {
    this.winner = 'purple';
    this.gameKeeper.score_purple += this.points;
    this.game2.nextTurn();
  }

  selectNon(){
    this.winner = 'non';
    this.game2.nextTurn();
  }

}
