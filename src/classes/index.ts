import { IEventType } from "../enums";

export class Event<T> {
  public type: IEventType;
  public payload: T;

  constructor(type: IEventType, payload: T) {
    this.type = type;
    this.payload = payload;
  }
}

export { BackupCode } from "./BackupCode";
export { Location } from "./Location";
export { MFAOptions } from "./MFAOptions";
export { Oauth2Identifiers } from "./Oauth2Identifiers";
export { User } from "./User";
export { YubikeyOptions } from "./YubikeyOptions";
export * from "./dto/";
