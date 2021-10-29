// 8-99 reserved for future use
export enum IAccountType {
  GUEST = 0,
  STUDENT = 1,
  PARENT = 2,
  TEACHER = 3,
  PRINCIPAL = 4,
  SCHOOL_SECRETARY = 5,
  STUDY_INSTRUCTOR = 6,
  STAFF = 7,
  ADMIN = 100,
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
}
