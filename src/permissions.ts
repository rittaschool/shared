// the value of an permission has to be power of 2
export enum Permission {
  GET_ALL_USERS = 1,
  DISABLE_LOGIN = 2,
  DISABLE_REGISTER = 4,
  DISABLE_USER = 8,
  DISABLE_ROLE = 16,
  INSTALL_PLUGIN = 32,
  UNINSTALL_PLUGIN = 64,
}
