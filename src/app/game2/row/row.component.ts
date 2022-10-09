import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Game2Service} from "../game2.service";
import {GameKeeperService} from "../../game-keeper.service";
import {UndoService} from "../../undo.service";

export class RowState {
  winner = "";
}

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input("round") round: number = 0;
  @Input("force-winner") forceWinner = "false";
  @Input("points") points: number = 0;

  get winner(): string {
    return this.state.winner;
  }

  set winner(value: string) {
    // if(this.state.winner == value) return;
    // this.undoService.createSavepoint("Row Winner");
    this.state.winner = value;
  }

  state: RowState = new RowState();

  constructor(public game2: Game2Service, public gameKeeper: GameKeeperService, private undoService: UndoService) {
    this.undoService.savepointCreateEventEmitter.subscribe((count) => {
      this.undoService.saveState(this.state, "rowstate" + this.round, count);
    });

    this.undoService.undoEventEmitter.subscribe((count) => {
      let state = this.undoService.getState("rowstate" + this.round, count);
      if(state == null) return;
      this.state = state;
    });
  }

  ngOnInit(): void {
    this.points = this.game2.getPointsForRound(this.round);
  }

  selectRed() {
    if (this.winner == "") {
      this.winner = 'red';
      this.gameKeeper.score_red += this.points;
      this.game2.nextTurn();
    }
  }

  selectGreen() {
    if (this.winner == "") {
      this.winner = 'green';
      this.gameKeeper.score_green += this.points;
      this.game2.nextTurn();
    }
  }

  selectBlue() {
    if (this.winner == "") {
      this.winner = 'blue';
      this.gameKeeper.score_blue += this.points;
      this.game2.nextTurn();
    }
  }

  selectPurple() {
    if (this.winner == "") {
      this.winner = 'purple';
      this.gameKeeper.score_purple += this.points;
      this.game2.nextTurn();
    }
  }

  selectNon() {
    this.winner = 'non';
    this.game2.nextTurn();
  }

}
