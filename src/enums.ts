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

export enum Permission {
  GET_ALL_USERS = 1 << 0,
  DISABLE_LOGIN = 1 << 1,
  DISABLE_REGISTER = 1 << 2,
  DISABLE_USER = 1 << 3,
  DISABLE_ROLE = 1 << 4,
  INSTALL_PLUGIN = 1 << 5,
  UNINSTALL_PLUGIN = 1 << 6,
  ENABLE_LOGIN = 1 << 7,
  ENABLE_REGISTER = 1 << 8,
  ENABLE_USER = 1 << 9,
  ENABLE_ROLE = 1 << 10,
}
