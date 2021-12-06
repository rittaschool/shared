export enum IAccountType {
  ADMIN = 0,
  GUEST = 1,
  STUDENT = 2,
  PARENT = 3,
  TEACHER = 4,
  PRINCIPAL = 5,
  SCHOOL_SECRETARY = 6,
  STUDY_INSTRUCTOR = 7,
  STAFF = 8,
}

export enum ISocialProvider {
  OPINSYS = "opinsys",
}

export enum IEventType {
  USER_CREATED = "user_created",
  USER_UPDATED = "user_updated",
  USER_REMOVED = "user_removed",
  GET_USERS = "get_users",
  GET_USER = "get_user",
  USER_LOGIN = "user_login",
  USER_OAUTH_LOGIN = "user_oauth_login",
  USER_MFA_LOGIN = "user_mfa_login",
}

export enum ILoginResponse {
  INVALID_CREDINTIALS = "invalid_credintials",
  MFA_REQUIRED = "mfa_required",
  PWD_CHANGE_REQUIRED = "pwd_change_required",
  LOGGED_IN = "logged_in",
}

export enum ITokenType {
  ACCESS_TOKEN = "access",
  REFRESH_TOKEN = "refresh",
  MFA_TOKEN = "mfa",
  PWD_CHANGE_TOKEN = "pwd_change",
}

export enum IErrorType {
  INVALID_CREDENTIALS = "invalid_credentials",
  USER_NOT_FOUND = "user_not_found",
  USER_ALREADY_EXISTS = "user_already_exists",
  USER_DISABLED = "user_disabled",
  EMAIL_OR_USERNAME_REQUIRED = "email_or_username_required",
  UNSUPPORTED_PROVIDER = "unsupported_provider",
  INVALID_PROVIDER = "invalid_provider",
  INVALID_ORGANIZATION = "invalid_organization",
  INVALID_TOKEN = "invalid_token",
  INVALID_CODE = "invalid_code",
}
