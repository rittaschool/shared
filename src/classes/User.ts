import { ILocation, IMFAOptions, IUser, IYubikeyOptions } from "../interfaces";
import { IOAuth2Identifiers } from "../types";

//TODO: remove omit when making accounts
export class User implements Omit<IUser, "accounts"> {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  alias?: string;
  username?: string;
  email?: string;
  password: string;
  home?: ILocation;
  mfa?: IMFAOptions;
  yubikey?: IYubikeyOptions;
  oauth2Identifiers?: IOAuth2Identifiers;
  // string type because we are going to store the accounts in a different service. The string will be the id of the account
  accounts: string[];
  latestLogin?: Date;
  latestPasswordChange?: Date;
  isFirstLogin: boolean;
  isPasswordChangeRequired: boolean; // Prompts user to change his password
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    password: string,
    accounts: string[],
    isFirstLogin: boolean,
    isPasswordChangeRequired: boolean,
    home?: ILocation,
    phoneNumber?: string,
    alias?: string,
    username?: string,
    email?: string,
    mfa?: IMFAOptions,
    yubikey?: IYubikeyOptions,
    oauth2Identifiers?: IOAuth2Identifiers,
    latestLogin?: Date,
    latestPasswordChange?: Date
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.alias = alias;
    this.username = username;
    this.email = email;
    this.password = password;
    this.home = home;
    this.mfa = mfa;
    this.yubikey = yubikey;
    this.oauth2Identifiers = oauth2Identifiers;
    this.accounts = accounts;
    this.latestLogin = latestLogin;
    this.latestPasswordChange = latestPasswordChange;
    this.isFirstLogin = isFirstLogin;
    this.isPasswordChangeRequired = isPasswordChangeRequired;
    this.createdAt = new Date(Date.now());
    this.updatedAt = new Date(Date.now());
  }
}
