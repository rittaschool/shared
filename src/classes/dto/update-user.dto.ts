import {
  Location,
  Oauth2Identifiers,
  MFAOptions,
  YubikeyOptions,
} from "../index";

export class UpdateUserDto {
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  alias?: string;
  home?: Location;
  oauth2Identifiers?: Oauth2Identifiers;
  phoneNumber?: string;
  username?: string;
  mfa?: MFAOptions;
  yubikey?: YubikeyOptions;
}
