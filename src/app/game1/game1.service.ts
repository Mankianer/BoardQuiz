import { Injectable } from '@angular/core';
import FragenBeispiel from '../../assets/beispielFragen.json';
import {GameKeeperService} from "../game-keeper.service";
import {UndoService} from "../undo.service";
import {CardContent} from "./card/card.component";

export interface Card {
  title: string;
  text: string;
  team: 'red' | 'blue' | 'green' | 'purple' | 'non' | '';
  answer: string;
  options: string;
}

export interface Kategorie {
  kategorie: string;
  fragen: string[][];
}

export class Game1State {
  public countdown: number = 0;
  // public current_Card: Card = {text: "Runde 1", title: "0", team: "", answer: ""};
  currentCardId: number = -1;
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

  isOptionShown = false;

  public switchOptionShown() {
    if(this.current_Card.options == "") return;
    this.isOptionShown = !this.isOptionShown;
  }

  get isSubBoxVisible() {
    return this.gameKeeper.isSubBoxVisible;
  };
  public content: Kategorie[] = FragenBeispiel;
  get current_Card(): Card {
    if(this.game1State.currentCardId == -1) return {text: "Runde 1", title: "0", team: "", answer: "", options: ""};
    let find = this.game1State.cards.find( (value) => value[0] == this.game1State.currentCardId);
    if(find == undefined) return new CardContent();
    return find[1];

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

    let answerCard = new CardContent();
    answerCard.title = "0";
    answerCard.text = "Antwort";
    answerCard.team = "";
    answerCard.answer = "";
    this.game1State.cards.push([-2, answerCard]);
  }

  selectCard(cardId: number): void {
    this.isOptionShown = false;
    this.game1State.currentCardId = cardId;
  }

  showAnswer(answer: string) {
    this.game1State.cards.find((value) => value[0] == -2)![1].text = answer;
    this.selectCard(-2);
  }

  nextRound() {
    if(this.current_Card.title != "0") {this.game1State.countdown--; }
    if(this.current_Card.team == "") this.current_Card.team = "non";
    this.showAnswer(this.current_Card.answer);
    // this.undoService.createSavepoint("next Round");
    if(this.game1State.countdown == 0) {
      this.gameKeeper.nextGame();
    }
  }

  setRound(round: number) {
    this.gameKeeper.round = round;
  }

  useJoker(team: number, joker: 'fon' | 'crowd') {
    // if(!this.game1State.joker[team][joker]) return;
    this.undoService.createSavepoint("joker");
    this.game1State.joker[team][joker] = !this.game1State.joker[team][joker];
  }

  loadCardContent(cardId: number): CardContent {
    if(cardId == -1) return new CardContent();
    let cardContent1 = this.game1State.cards.find((value) => value[0] == cardId);
    if (cardContent1) {
      return cardContent1[1];
    } else {
      let cardContent = new CardContent();
      this.game1State.cards.push([cardId, cardContent]);
      return cardContent;
    }
  }
}
