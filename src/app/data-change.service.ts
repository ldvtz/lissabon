import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataChangeService {
  private headerEmit: Subject<number> = new Subject<number>();

  constructor() { }

  public emitHeader(): Subject<number> {
    return this.headerEmit;
  }
}
