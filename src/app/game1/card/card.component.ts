import { Component, Input, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

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

  constructor() {}

  ngOnInit() {}

  flip: string = 'inactive';

  toggleFlip() {
    if (!this.isHeader) {
      this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
    }
  }
}
