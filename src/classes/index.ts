import { IEventType } from "../enums";

export class Event<T> {
  public type: IEventType;
  public payload: T;

  constructor(type: IEventType, payload: T) {
    this.type = type;
    this.payload = payload;
  }
}
