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

  constructor(public game1: Game1Service, private undoService: UndoService) { }

  ngOnInit(): void {
  }

  undo() {
    this.undoService.undo("game1");
  }

  ngAfterViewInit(): void {
    this.shortcuts.push({
      key: ["ctrl + z"],
      label: "Undo",
      description: "Strg + Z",
      command: this.undo.bind(this),
      preventDefault: true
    });
    this.undoService.createSavepoint("game1");
  }

}
