import {Component, OnInit} from '@angular/core';
import {GameKeeperService} from "../game-keeper.service";

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  toggle = false;

  constructor(public gameKeeper: GameKeeperService) {
  }

  ngOnInit(): void {
  }

  public startRound(round: number) {
    this.gameKeeper.round = round;
  }

  public hit() {
    this.toggle = !this.toggle;
  }

}
