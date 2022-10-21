import {Injectable} from '@angular/core';
import {GameKeeperService} from "../game-keeper.service";
import {UndoService} from "../undo.service";

export class Game2State {
  currentRound = 1;
  public joker: boolean[] = [];
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.joker.push(true);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class Game2Service {

  get isSubBoxVisible() {
    return this.gameKeeper.isSubBoxVisible;
  };
  set isSubBoxVisible(value: boolean) {
    this.gameKeeper.isSubBoxVisible = value;
  };
  private state: Game2State = new Game2State();
  get currentRound(): number {
    return this.state.currentRound;
  }
  set currentRound(value: number) {
    // if(this.state.currentRound == value) return;
    // this.undoService.createSavepoint("game2 currentRound");
    this.state.currentRound = value;
  }

  maxRounds = 0;
  pointArray: number[] = [10];

  constructor(public gameKeeper: GameKeeperService, private undoService: UndoService) {
    this.undoService.savepointCreateEventEmitter.subscribe((count) => {
      this.undoService.saveState(this.state, "game2state", count);
    });

    this.undoService.undoEventEmitter.subscribe((count) => {
      let state = this.undoService.getState("game2state", count);
      if(state == null) return;
      this.state = state;
    });
  }

  public reset(){
    this.currentRound = 1;
    this.maxRounds = 0;
    this.pointArray = [10];
  }

  public nextTurn() {
    this.currentRound++;
    if (this.currentRound > this.maxRounds) {
      this.reset();
      this.gameKeeper.nextGame();
    }
  }

  public getPointsForRound(round: number): number {
    return this.pointArray[(round - 1) % this.pointArray.length]
  }

  getJoker(team: number): boolean {
    return this.state.joker[team];
  }

  setJoker(team: number) {
    if(!this.state.joker[team]) return;
    this.undoService.createSavepoint("game2 joker");
    this.state.joker[team] = false;

  }

  setRound(round: number) {
    this.gameKeeper.round = round;
  }
}
