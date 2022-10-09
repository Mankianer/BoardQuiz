import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UndoService {

  public savepointCreateEventEmitter: EventEmitter<number> = new EventEmitter<number>();
  public undoEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  private _undoCount = 0;
  get undoCount() {
    return this._undoCount;
  }

  constructor() { }

  public undo() {
    console.log("undo init! - " + this.undoCount);
    this.undoEventEmitter.emit(this.undoCount);
    this._undoCount--;
  }

  public createSavepoint() {
    this._undoCount++;
    this.savepointCreateEventEmitter.emit(this.undoCount);
  }


}
