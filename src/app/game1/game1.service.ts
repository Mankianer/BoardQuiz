import { Injectable } from '@angular/core';
import FragenBeispiel from '../../assets/beispielFragen.json';
import {GameKeeperService} from "../game-keeper.service";
import {UndoService} from "../undo.service";

export interface Card {
  title: string;
  text: string;
  team: 'red' | 'blue' | 'green' | 'purple' | 'non' | '';
}

export interface Kategorie {
  kategorie: string;
  fragen: string[][];
}

export class Game1State {
  public countdown: number = 0;
  public current_Card: Card = {text: "Runde 1", title: "0", team: ""};
}

@Injectable({
  providedIn: 'root'
})
export class Game1Service {

  public content: Kategorie[] = FragenBeispiel;
  get current_Card(): Card {
    return this.game1State.current_Card;
  }

  public game1State = new Game1State();

  constructor(public gameKeeper: GameKeeperService, private undoService: UndoService) {
    for (let i = 0; i < this.content.length; i++) {
      this.game1State.countdown += this.content[i].fragen.length;
    }
    this.undoService.savepointCreateEventEmitter.subscribe((count) => {
      this.undoService.saveState(this.game1State, "game1state", count);
    });

    this.undoService.undoEventEmitter.subscribe((count) => {
      let state = this.undoService.getState("game1state", count);
      if(state == null) return;
      this.game1State = state;
    });
  }

  selectCard(card: Card): void {
    this.game1State.current_Card = card;
  }

  nextRound() {
    if(this.current_Card.title != "0") {this.game1State.countdown--; }
    if(this.current_Card.team == "") this.current_Card.team = "non";
    this.selectCard({title: "0", text: "Nächste Frage", team: ""})
    if(this.game1State.countdown == 0) {
      this.gameKeeper.nextGame();
    }
  }
}
