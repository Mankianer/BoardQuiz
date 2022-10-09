import { Component, Input, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {Game1Service} from "../game1.service";
import {UndoService} from "../../undo.service";


export class CardContent {
  flip: string = 'inactive';
  public team: 'red' | 'blue' | 'green' | 'purple' | 'non' | ''  = ''
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() id: number = -1;
  @Input() text: string = 'Hier steht dann deine Frage?';
  @Input() isHeader: boolean = false;

  private state: CardContent = new CardContent(); //TODO: card content in gameservice
  get flip() {
    return this.state.flip;
  }
  get team() {
    return this.state.team;
  }
  set flip(value: string) {
    if(this.state.flip == value) return;
    this.undoService.createSavepoint("card flip")
    this.state.flip = value;
  }
  set team(value: 'red' | 'blue' | 'green' | 'purple' | 'non' | '') {
    this.state.team = value;
  }


  constructor(public game1: Game1Service, private undoService: UndoService) {

    this.undoService.savepointCreateEventEmitter.subscribe((count) => {
      if(this.id == -1) return;
      this.undoService.saveState(this.state, "cardstate" + this.id, count);
    });

    this.undoService.undoEventEmitter.subscribe((count) => {
      if(this.id == -1) return;
      let state = this.undoService.getState("cardstate" + this.id, count);
      if(state == null) return;
      this.state = state;
    });
  }

  ngOnInit() {}


  toggleFlip() {
    if (!this.isHeader && !this.isFlipped() && this.game1.current_Card.title == "0") {
      this.flip = this.isFlipped() ? 'inactive' : 'active';
      this.game1.selectCard(this);
    }
  }

  public isFlipped(): boolean{
    return this.flip == 'active';
  }

}
