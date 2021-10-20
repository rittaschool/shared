export interface IYubikeyOptions {
  enabled: boolean;
  id: string;
  pin: string;
}

export interface IMFAOptions {
  enabled: boolean;
  backupCodes: IBackupCode[];
  secret: string;
}

export interface IBackupCode {
  code: string;
  used: boolean;
}
