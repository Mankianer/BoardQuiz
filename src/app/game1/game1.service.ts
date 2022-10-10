import { Injectable } from '@angular/core';
import FragenBeispiel from '../../assets/beispielFragen.json';
import {GameKeeperService} from "../game-keeper.service";
import {UndoService} from "../undo.service";
import {CardContent} from "./card/card.component";

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
  public joker: {fon: boolean, crowd: boolean}[] = [];
  public cards: [id: number, card: CardContent][] = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.joker.push({fon: true, crowd: true});
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class Game1Service {

  public content: Kategorie[] = FragenBeispiel;
  get current_Card(): Card {
    return this.game1State.current_Card;
  }

  public getJoker(team: number, joker: 'fon' | 'crowd') {
    return this.game1State.joker[team][joker];
  }

  private game1State = new Game1State();

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
    this.undoService.createSavepoint("next Round");
    if(this.game1State.countdown == 0) {
      this.gameKeeper.nextGame();
    }
  }

  useJoker(team: number, joker: 'fon' | 'crowd') {
    if(!this.game1State.joker[team][joker]) return;
    this.undoService.createSavepoint("joker");
    this.game1State.joker[team][joker] = false;
  }

  loadCardContent(cardId: number): CardContent {
    if(cardId == -1) return new CardContent();
    let cardContent1 = this.game1State.cards.find((value) => value[0] == cardId);
    if (cardContent1 !== undefined) {
      return cardContent1[1];
    } else {
      let cardContent = new CardContent();
      this.game1State.cards.push([cardId, cardContent]);
      return cardContent;
    }
  }
}
