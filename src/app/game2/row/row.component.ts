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


  private selectColor(team: string = "") {
    this.undoService.createSavepoint("Row Winner");
    if (this.winner == "") {
      this.winner = team;
      this.game2.nextTurn();
    }
  }

  selectRed() {
    this.selectColor('red');
    this.gameKeeper.score_red += this.points;
  }


  selectGreen() {
    this.selectColor('green');
    this.gameKeeper.score_green += this.points;
  }

  selectBlue() {
    this.selectColor('blue');
    this.gameKeeper.score_blue += this.points;
  }

  selectPurple() {
    this.selectColor('purple');
    this.gameKeeper.score_purple += this.points;
  }

  selectNon() {
    this.selectColor('non');
  }

}
