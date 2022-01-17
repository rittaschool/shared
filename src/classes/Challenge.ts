import { randomUUID } from "crypto";

export interface Challenge {
  id: string;
  type: IChallengeType;
  data?:
    | IPasswordChallengeData
    | IOtpChallengeData
    | IFido2ChallengeData
    | null;
  userId: string;
}

export const generateChallenge = (
  type: IChallengeType,
  userId: string
): Challenge => {
  const challenge: Challenge = {
    id: `challenge-${randomUUID()}`,
    type,
    data: null,
    userId,
  };

  switch (type) {
    case IChallengeType.PASSWORD_NEEDED:
      challenge.data = {
        password: "",
      };
      break;
    case IChallengeType.OTP_NEEDED:
      challenge.data = {
        otp: "",
      };
      break;
    case IChallengeType.FIDO2_NEEDED:
      //TODO: add data
      challenge.data = null;
      break;
    default:
      challenge.data = null;
      break;
  }

  return challenge;
};

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
