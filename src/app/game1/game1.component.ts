import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Game1Service} from "./game1.service";
import {ShortcutInput} from "ng-keyboard-shortcuts";
import {UndoService} from "../undo.service";


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit, AfterViewInit {

  shortcuts: ShortcutInput[] = [];

  constructor(public game1: Game1Service, private undoService: UndoService) {
  }

  public switchAnswer() {
    this.game1.switchOptionShown();
  }

  ngOnInit(): void {
    this.shortcuts.push({
      key: ["space"],
      label: "Antworten",
      description: "Zeigt/Blendet Antwortmöglichkeiten ein/aus",
      command: this.switchAnswer.bind(this),
      preventDefault: true
    });
  }

  ngAfterViewInit(): void {
    this.undoService.createSavepoint("game1");
  }


}
