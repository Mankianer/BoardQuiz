import { Component, OnInit } from '@angular/core';
import {GameKeeperService} from "../game-keeper.service";

@Component({
  selector: 'app-transition-screen',
  templateUrl: './transition-screen.component.html',
  styleUrls: ['./transition-screen.component.css']
})
export class TransitionScreenComponent implements OnInit {

  constructor(public gameKeeper: GameKeeperService) { }

  ngOnInit(): void {
  }

}
