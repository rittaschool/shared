import { randomUUID } from "crypto";

export class Challenge {
  id: string;

  private data: {
    type?: IChallengeType;
    data?: IPasswordChallengeData | IOtpChallengeData | IFido2ChallengeData;
    userId?: string;
  };

  constructor(
    public readonly type: IChallengeType,
    userId: string,
    obj?: Challenge
  ) {
    this.id = "challenge-" + randomUUID();
    this.data = { userId };

    if (obj) {
      Object.assign(this, obj);
    }
  }

  submit(
    data: IPasswordChallengeData | IOtpChallengeData | IFido2ChallengeData
  ) {
    this.data = {
      type: this.type,
      data,
      userId: this.data.userId,
    };
  }

  getData() {
    return this.data;
  }
}

export interface IPasswordChallengeData {
  password: string;
}

export interface IOtpChallengeData {
  otp: string;
}

export interface IFido2ChallengeData {
  //fido2 stuff, key is not the correct one
  key: string;
}

export enum IChallengeType {
  PASSWORD_NEEDED = "PASSWORD_NEEDED",
  FIDO2_NEEDED = "FIDO2_NEEDED",
  OTP_NEEDED = "OTP_NEEDED",
}
