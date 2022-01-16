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
    id?: string
  ) {
    this.id = id || "challenge-" + randomUUID();
    this.data = { userId };
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

  dataFromJSON(json: string) {
    const data = JSON.parse(json);
    this.data = data;
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
