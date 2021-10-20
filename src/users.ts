export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  alias?: string;
  username?: string;
  email?: string;
  password: string;
  home: any;
  mfa?: {
    enabled: boolean;
    backupCodes: string[];
    secret: string;
  };
  yubikey?: {
    enabled: boolean;
    id: string;
    pin: string;
  };
  oauth2Identifiers?: {
    opinsys?: string;
  };
  accounts: any[];
  latestLogin?: Date;
  latestPasswordChange?: Date;
  isFirstLogin: boolean;
  isPasswordChangeRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
}
