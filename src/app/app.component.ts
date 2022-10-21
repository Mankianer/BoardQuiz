import {AfterViewInit, Component, VERSION} from '@angular/core';
import {GameKeeperService} from "./game-keeper.service";
import {ShortcutInput} from "ng-keyboard-shortcuts";
import {UndoService} from "./undo.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;

  shortcuts: ShortcutInput[] = [];


  constructor(public gameKeeper: GameKeeperService, private undoService: UndoService) {
    undoService.reset();
  }

  undo() {
    this.undoService.undo("main");
  }

  regeln() {
    this.gameKeeper.isSubBoxVisible = !this.gameKeeper.isSubBoxVisible;
  }

  ngAfterViewInit(): void {
    this.shortcuts.push({
        key: ["ctrl + z"],
        label: "Undo",
        description: "Strg + Z",
        command: this.undo.bind(this),
        preventDefault: true
      }, {
        key: ["r"],
        label: "Regeln",
        description: "Zeigt Punktabzugknöpfe an",
        command: this.regeln.bind(this),
        preventDefault: true
      });

    for (let i = 1; i <= 4; i++) {
      this.shortcuts.push({
        key: ["ctrl + " + i],
        label: "Spiel " + i,
        description: "Zeigt Spiel " + i + " an",
        command: this.startRound.bind(this, i),
        preventDefault: true
      })
    }
  }


  startRound(round: number) {
    this.gameKeeper.round = round;
  }
}
