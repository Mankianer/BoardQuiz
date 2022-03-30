import {Component, OnInit} from '@angular/core';
import {GameKeeperService} from "../game-keeper.service";

export class Score {
  rank = 1;

  constructor(public name: string, public score: number, public text: string) {
  }
}

@Component({
  selector: 'app-transition-screen',
  templateUrl: './transition-screen.component.html',
  styleUrls: ['./transition-screen.component.css']
})
export class TransitionScreenComponent implements OnInit {


  constructor(public gameKeeper: GameKeeperService) {
  }

  ngOnInit(): void {
  }

  getScoreList(): Score[] {
    let scores = [this.getRed(), this.getBlue(), this.getGreen(), this.getPurple()].sort((a, b) => b.score - a.score);
    let offset = 0;
    for (let i = 1; i < scores.length; i++) {
      if (scores[i - 1].score == scores[i].score) {
        offset++
      }
      scores[i].rank = (i + 1) - offset;

    }
    return scores;
  }

  getRed(): Score {
    return new Score("red", this.gameKeeper.score_red, "Team Rot");
  }

  getBlue(): Score {
    return new Score("blue", this.gameKeeper.score_blue, "Team Blau");
  }

  getGreen(): Score {
    return new Score("green", this.gameKeeper.score_green, "Team Grün");
  }

  getPurple(): Score {
    return new Score("purple", this.gameKeeper.score_purple, "Team Gelb");
  }

}
