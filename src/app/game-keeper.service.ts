import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameKeeperService {

  round: number = 0;

  constructor() { }
}
