import {Injectable} from '@angular/core';
import {GameKeeperService} from "../game-keeper.service";

@Injectable({
  providedIn: 'root'
})
export class Game2Service {

  currentRound = 1;
  maxRounds = 0;
  pointArray: number[] = [10];

  constructor(public gameKeeper: GameKeeperService) {
  }

  public nextTurn() {
    this.currentRound++;
    if (this.currentRound > this.maxRounds) {
      this.gameKeeper.nextGame();
    }
  }

  public getPointsForRound(round: number): number {
    return this.pointArray[round - 1 % this.pointArray.length]
  }
}
