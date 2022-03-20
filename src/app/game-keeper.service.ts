import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameKeeperService {

  round: number = 0;
  score_red: number = 0;
  score_green: number = 0;
  score_blue: number = 0;
  score_purple: number = 0;

  next_round = 1;

  constructor() { }

  public nextGame() {
    if( this.round == -1){
      this.round = this.next_round;
    }else {
      this.next_round = this.round + 1;
      this.round = -1;
    }
  }
}
