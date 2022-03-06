import { Component, OnInit } from '@angular/core';
import {GameKeeperService} from "../../game-keeper.service";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(public gameKeeper: GameKeeperService) { }

  ngOnInit(): void {
  }

}
