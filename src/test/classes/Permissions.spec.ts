import { IErrorType, Permission, RittaError } from "../..";
import { Permissions } from "../../classes/Permissions";

describe("Permissions", () => {
  describe("getPermissions", () => {
    it("should return an array of strings", () => {
      const result = Permissions.getPermissions(
        Permissions.permissions.getAllUsers
      );

      expect(result).toEqual(["getAllUsers"]);
    });

    it("should throw error if number is 0", () => {
      expect(() => {
        Permissions.getPermissions(0);
      }).toThrow(
        new RittaError(
          "Too small permission number",
          IErrorType.INVALID_PERMISSION
        )
      );
    });
  });

  describe("addPermissions", () => {
    it("should throw error because it already had the permission", () => {
      expect(() => {
        Permissions.addPermissions(
          1,
          Permission.GET_ALL_USERS,
          Permission.DISABLE_LOGIN
        );
      }).toThrow(
        new RittaError(
          "Permission has already been added",
          IErrorType.PERMISSION_IS_ALREADY_ADDED
        )
      );
    });
  });
});
