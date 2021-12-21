import { Permission } from "../enums";
import { IErrorType, RittaError } from "../";

export class Permissions {
  static permissions: {
    [key: string]: Permission;
  } = {
    getAllUsers: Permission.GET_ALL_USERS,
    disableLogin: Permission.DISABLE_LOGIN,
    disableRegister: Permission.DISABLE_REGISTER,
    disableUser: Permission.DISABLE_USER,
    disableRole: Permission.DISABLE_ROLE,
    installPlugin: Permission.INSTALL_PLUGIN,
    uninstallPlugin: Permission.UNINSTALL_PLUGIN,
    enableLogin: Permission.ENABLE_LOGIN,
    enableRegister: Permission.ENABLE_REGISTER,
    enableUser: Permission.ENABLE_USER,
    enableRole: Permission.ENABLE_ROLE,
  };

  static getPermissions(permissions: number) {
    const result: string[] = [];
    for (const permission in this.permissions) {
      if (permissions & this.permissions[permission]) {
        result.push(permission);
      }
    }
    return result;
  }

  static addPermissions(
    permissions: number,
    ...permissionsToAdd: Permission[]
  ) {
    let newPerms: number = permissions;
    for (const permission of permissionsToAdd) {
      newPerms |= permission;
    }
    return newPerms;
  }

  static removePermissions(
    permissions: number,
    ...permissionsToRemove: Permission[]
  ) {
    let newPerms: number = permissions;
    for (const permission of permissionsToRemove) {
      newPerms &= ~permission;
    }
    return newPerms;
  }

  static getPermission(permission: number) {
    try {
      const res = Object.entries(this.permissions).find(
        ([_, v]) => v === permission
      );

      if (res) {
        return res[0];
      } else {
        return null;
      }
    } catch (error) {
      throw new RittaError(
        `Invalid Permission, code: ${permission}`,
        IErrorType.INVALID_PERMISSION
      );
    }
  }
}
