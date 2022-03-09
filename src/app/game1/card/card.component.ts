import { Component, Input, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {Game1Service} from "../game1.service";

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
  @Input() text: string = 'Hier steht dann deine Frage?';
  @Input() isHeader: boolean = false;

  constructor(public game1: Game1Service) {}

  ngOnInit() {}

  flip: string = 'inactive';

  toggleFlip() {
    console.log(this.game1.current_Card.title)
    if (!this.isHeader && !this.isFlipped() && this.game1.current_Card.title == "0") {
      this.flip = this.isFlipped() ? 'inactive' : 'active';
      this.game1.selectCard(this);
    }
  }

  public isFlipped(): boolean{
    return this.flip == 'active';
  }
}
