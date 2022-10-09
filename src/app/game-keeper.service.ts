import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameKeeperService {

  private _round: number = 0;
  private _score_red: number = 0;
  private _score_green: number = 0;
  private _score_blue: number = 0;
  private _score_purple: number = 0;

  private _next_round = 1;

  constructor() {
  }

  public nextGame() {
    if (this.round == 4) {
      this.round = 5;
    } else if (this.round == -1) {
      this.round = this.next_round;
    } else {
      this.next_round = this.round + 1;
      this.round = -1;
    }
  }

  get round(): number {
    return this._round;
  }
  set round(value: number) {
    this._round = value;
  }
  get score_red(): number {
    return this._score_red;
  }
  set score_red(value: number) {
    this._score_red = value;
  }
  get score_green(): number {
    return this._score_green;
  }
  set score_green(value: number) {
    this._score_green = value;
  }
  get score_blue(): number {
    return this._score_blue;
  }
  set score_blue(value: number) {
    this._score_blue = value;
  }
  get score_purple(): number {
    return this._score_purple;
  }
  set score_purple(value: number) {
    this._score_purple = value;
  }
  get next_round(): number {
    return this._next_round;
  }
  set next_round(value: number) {
    this._next_round = value;
  }


}
