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
    // Check if the number is 0
    if (permissions === 0)
      // Throw error
      throw new RittaError(
        "Too small permission number",
        IErrorType.INVALID_PERMISSION
      );

    const result: string[] = [];

    // Loop over all permissions
    for (const permission in this.permissions) {
      // Check if the permission is set
      if (permissions & this.permissions[permission]) {
        // Add the permission to the result
        result.push(permission);
      }
    }

    // Return result
    return result;
  }

  static addPermissions(
    permissions: number,
    ...permissionsToAdd: Permission[]
  ) {
    // Get current permissions
    const currentPermissions = this.getPermissions(permissions);

    let newPerms: number = permissions;

    // Loop over all permissions that are going to be added
    for (const permission of permissionsToAdd) {
      // Check if the permission is already added
      if (currentPermissions.includes(this.getPermission(permission))) {
        // Throw error
        throw new RittaError(
          "Permission has already been added",
          IErrorType.PERMISSION_IS_ALREADY_ADDED
        );
      }

      // Add the permission to the result
      newPerms |= permission;
    }

    // Return new permissions
    return newPerms;
  }

  static removePermissions(
    permissions: number,
    ...permissionsToRemove: Permission[]
  ) {
    // Get current permissions
    const currentPermissions = this.getPermissions(permissions);

    let newPerms: number = permissions;

    // Loop over all permissions that are going to be removed
    for (const permission of permissionsToRemove) {
      // Check if the permission is not found
      if (!currentPermissions.includes(this.getPermission(permission))) {
        // Throw error
        throw new RittaError(
          "Permission has not been added",
          IErrorType.PERMISSION_NOT_FOUND
        );
      }

      // Remove the permission from the result
      newPerms &= ~permission;
    }

    // Return new permissions
    return newPerms;
  }

  static getPermission(permission: number) {
    try {
      // Get the permission with the value from the enum
      const res = Object.entries(this.permissions).find(
        ([_, v]) => v === permission
      );

      // Check if result in defined
      if (res) {
        // Return the permission
        return res[0];
      } else {
        // Throw new error to indicate failed status
        throw new RittaError(
          `Invalid Permission, code: ${permission}`,
          IErrorType.INVALID_PERMISSION
        );
      }
    } catch (error) {
      throw new RittaError(
        `Invalid Permission, code: ${permission}`,
        IErrorType.INVALID_PERMISSION
      );
    }
  }
}
