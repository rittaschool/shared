import { ISocialProvider } from "../..";

export class LoginUserDto {
  username: string;
  password: string;

  constructor(
    username: string,
    password: string,
  ) {
    this.username = username;
    this.password = password;
  }
}

export class LoginOAuthUserDto {
  provider: ISocialProvider;
  identifier: string;

  constructor(
    provider: ISocialProvider,
    identifier: string,
  ) {
    this.provider = provider;
    this.identifier = identifier;
  }
}
