import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameKeeperService {

  round: number = 0;
  score_red: number = 0;
  score_green: number = 0;
  score_blue: number = 0;

  constructor() { }
}
