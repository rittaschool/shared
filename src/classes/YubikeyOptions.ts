import { IYubikeyOptions } from "../interfaces";

export class YubikeyOptions implements IYubikeyOptions {
  enabled: boolean;
  id: string;
  pin: string;

  constructor(enabled: boolean, id: string, pin: string) {
    this.enabled = enabled;
    this.id = id;
    this.pin = pin;
  }
}
