export interface CreateUserValidationSchema {
  alias?: string;
  email?: string;
  firstName: string;
  home?: LocationSchema;
  lastName?: string;
  oauth2Identifiers?: Oauth2IdentifersValidation;
  password: string;
  phoneNumber?: string;
  username?: string;
}

export interface LocationSchema {
  address: string;
  city: string;
  country: string;
  zip: string;
}

export interface Oauth2IdentifersValidation {
  opinsys?: string;
}

export interface UpdateUserValidationSchema {
  alias?: string;
  email?: string;
  firstName?: string;
  home?: LocationSchema;
  id: string;
  lastName?: string;
  oauth2Identifiers?: Oauth2IdentifersValidation;
  password?: string;
  phoneNumber?: string;
  username?: string;
}
