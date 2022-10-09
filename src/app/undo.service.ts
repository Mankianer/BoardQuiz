import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UndoService {

  private maxUndos = 10;

  private registeredIds: string[] = [];

  public savepointCreateEventEmitter: EventEmitter<number> = new EventEmitter<number>();
  public undoEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  private _undoCount = 0;
  private _undoCountOffset = 0;
  get undoLeft() {
    return this._undoCount - this._undoCountOffset;
  }

  constructor() { }

  public undo() {
    console.log("undo init! - " + this.undoLeft + " left - id:" + this._undoCount);
    if(this.undoLeft == 0) return;
    this.undoEventEmitter.emit(this._undoCount);
    this._undoCount--;
  }

  public createSavepoint() {
    this._undoCount++;
    this.savepointCreateEventEmitter.emit(this._undoCount);
    if(this.undoLeft == this.maxUndos) {
      this._undoCountOffset++;
      for(let id of this.registeredIds) {
        localStorage.removeItem("undo_" + id + "_" + this._undoCountOffset);
      }
    }
  }

  public saveState(state: any, id: string, count: number) {
    if(this.registeredIds.indexOf(id) == -1) {
      this.registeredIds.push(id);
    }
    localStorage.setItem("undo_" + id + "_" + count, JSON.stringify(state));
  }

  public getState(id: string, count: number) {
    let json = localStorage.getItem("undo_" + id + "_" + count);
    if(json == null) return null;
    return JSON.parse(json);
  }



}
