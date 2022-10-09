import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Game1Service} from "./game1.service";
import {ShortcutInput} from "ng-keyboard-shortcuts";


@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit, AfterViewInit {

  shortcuts: ShortcutInput[] = [];

  constructor(public game1: Game1Service) { }

  ngOnInit(): void {
  }

  private undo() {
    console.log("undo!");
  }

  ngAfterViewInit(): void {
    this.shortcuts.push({
      key: ["ctrl + z"],
      label: "Undo",
      description: "Strg + Z",
      command: this.undo,
      preventDefault: true
    });
  }

}
