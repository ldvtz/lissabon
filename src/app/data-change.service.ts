import {Subject} from "rxjs";

export class DataChangeService{
  private headerEmit: Subject<number> = new Subject<number>();

  public emitHeader(sectionId: number): Subject<number> {
    return this.headerEmit;
  }
}
