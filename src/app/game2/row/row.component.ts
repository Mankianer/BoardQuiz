import {Component, Input, OnInit} from '@angular/core';
import {Game2Service} from "../game2.service";
import {GameKeeperService} from "../../game-keeper.service";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input("round") round: string = "0";
  @Input("force-winner") forceWinner = "false";

  winner = "";

  constructor( public game2: Game2Service, public gameKeeper: GameKeeperService) { }

  ngOnInit(): void {
  }

  selectRed() {
    this.winner = 'red';
    this.gameKeeper.score_red += 10;
    this.game2.nextTurn();
  }

  selectGreen() {
    this.winner = 'green';
    this.gameKeeper.score_green += 10;
    this.game2.nextTurn();
  }

  selectBlue() {
    this.winner = 'blue';
    this.gameKeeper.score_blue += 10;
    this.game2.nextTurn();
  }

  selectPurple() {
    this.winner = 'purple';
    this.gameKeeper.score_purple += 10;
    this.game2.nextTurn();
  }

  selectNon(){
    this.winner = 'non';
    this.game2.nextTurn();
  }

}
