import { Injectable } from '@angular/core';
import FragenBeispiel from '../../assets/beispielFragen.json';
import {GameKeeperService} from "../game-keeper.service";

export interface Card {
  title: string;
  text: string;
  team: 'red' | 'blue' | 'green' | 'purple' | 'non' | '';
}

export interface Kategorie {
  kategorie: string;
  fragen: string[][];
}

@Injectable({
  providedIn: 'root'
})
export class Game1Service {

  public content: Kategorie[] = FragenBeispiel;
  public current_Card: Card = {text: "Runde 1", title: "0", team: ""};
  countdown: number = 0;

  constructor(public gameKeeper: GameKeeperService) {
    for (let i = 0; i < this.content.length; i++) {
      this.countdown += this.content[i].fragen.length;
    }
  }

  selectCard(card: Card): void {
    this.current_Card = card;
  }

  nextRound() {
    if(this.current_Card.title != "0") {this.countdown--; }
    if(this.current_Card.team == "") this.current_Card.team = "non";
    this.selectCard({title: "0", text: "Nächste Frage", team: ""})
    if(this.countdown == 0) {
      this.gameKeeper.nextGame();
    }
  }
}
