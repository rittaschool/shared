import { IEventType } from '../enums';

export class Event<T> {
  public type: IEventType;
  public payload: T;
}
