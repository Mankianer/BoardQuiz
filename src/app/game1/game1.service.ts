import { Injectable } from '@angular/core';
import FragenBeispiel from '../../assets/beispielFragen.json';
import {GameKeeperService} from "../game-keeper.service";

export interface Card {
  title: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class Game1Service {

  public content = FragenBeispiel;
  public current_Card: Card = {text: "Runde 1", title: "0"};

  constructor(public gameKeeper: GameKeeperService) { }

  selectCard(card: Card): void {
    this.current_Card = card;
  }

  nextRound() {
    this.selectCard({title: "0", text: "Nächste Frage"})
  }
}
