import {Injectable} from '@angular/core';
import {UndoService} from "./undo.service";

export class GameState {
  public _round: number = 1;
  public _score_red: number = 0;
  public _score_green: number = 0;
  public _score_blue: number = 0;
  public _score_purple: number = 0;

  public _next_round = 1;
}

@Injectable({
  providedIn: 'root'
})
export class GameKeeperService {

  private gamestate = new GameState();



  constructor(private undoService: UndoService) {
    this.undoService.savepointCreateEventEmitter.subscribe((count) => {
      this.undoService.saveState(this.gamestate, "gamestate", count);
    });

    this.undoService.undoEventEmitter.subscribe((count) => {
      let state = this.undoService.getState("gamestate", count);
      if(state == null) return;
      this.gamestate = state;
    });
    this.undoService.createSavepoint("gamekeeper");
  }

  public nextGame() {
    if (this.round == 4) {
      this.round = 5;
    } else if (this.round == -1) {
      this.round = this.next_round;
      this.undoService.reset();
      this.undoService.createSavepoint("gamekeeper after transition");
    } else {
      this.next_round = this.round + 1;
      this.round = -1;
    }
  }

  get round(): number {
    return this.gamestate._round;
  }
  set round(value: number) {
    // if(value == this.gamestate._round) return;
    // this.undoService.createSavepoint("round");
    this.gamestate._round = value;
  }
  get score_red(): number {
    return this.gamestate._score_red;
  }
  set score_red(value: number) {
    // if(value == this.gamestate._score_red) return;
    // this.undoService.createSavepoint("score_red");
    this.gamestate._score_red = value;
  }
  get score_green(): number {
    return this.gamestate._score_green;
  }
  set score_green(value: number) {
    // if(value == this.gamestate._score_green) return;
    // this.undoService.createSavepoint("score_green");
    this.gamestate._score_green = value;
  }
  get score_blue(): number {
    return this.gamestate._score_blue;
  }
  set score_blue(value: number) {
    // if(value == this.gamestate._score_blue) return;
    // this.undoService.createSavepoint("score_blue");
    this.gamestate._score_blue = value;
  }
  get score_purple(): number {
    return this.gamestate._score_purple;
  }
  set score_purple(value: number) {
    // if(value == this.gamestate._score_purple) return;
    // this.undoService.createSavepoint("score_purple");
    this.gamestate._score_purple = value;
  }
  get next_round(): number {
    return this.gamestate._next_round;
  }
  set next_round(value: number) {
    // if(value == this.gamestate._next_round) return;
    // this.undoService.createSavepoint("next_round");
    this.gamestate._next_round = value;
  }


}
