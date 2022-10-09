import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {Game2Service} from "./game2.service";
import {UndoService} from "../undo.service";
import {ShortcutInput} from "ng-keyboard-shortcuts";

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit, AfterViewInit {

  @Input("rounds") rounds = "1";
  @Input("force-winner") forceWinner = "false";
  @Input("points") pointArray: number[] = [10];
  @Input("hasTimer") hasTimer: boolean = false;

  shortcuts: ShortcutInput[] = [];

  constructor(public game2: Game2Service, private undoService: UndoService) {
  }

  ngOnInit(): void {
    this.game2.maxRounds = Number.parseInt(this.rounds);
    this.game2.pointArray = this.pointArray;
  }

  undo() {
    this.undoService.undo("transition-screen");
  }

  ngAfterViewInit(): void {
    this.shortcuts.push({
      key: ["ctrl + z"],
      label: "Undo",
      description: "Strg + Z",
      command: this.undo.bind(this),
      preventDefault: true
    });
    this.undoService.reset();
    this.undoService.createSavepoint("Game 2 Init");
  }

  counter() {
    return new Array(this.game2.maxRounds);
  }
}
