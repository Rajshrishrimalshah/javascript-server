import { IHasPer } from "./../interfaces";
let hasPermission: IHasPer;

import * as constant from "../constant";

const permissions = {
  [constant.MODULE_USER]: {
    [constant.PERMISSION_ALL]: [constant.ROLL_OF_HEAD_TRAINER],
    [constant.PERMISSION_READ]: [constant.ROLE_OF_TRAINEE, constant.ROLE_OF_TRAINER],
    [constant.PERMISSION_WRITE]: [constant.ROLE_OF_TRAINER],
    [constant.PERMISSION_DELETE]: []
  }
};

hasPermission = (module, role, permissionType) => {
  console.log("Module : " + module + " role : " + role + " PermissionType : " + permissionType);
  if (!permissions.hasOwnProperty(module)) {
    return false;
  }

  if (
    permissions[module].hasOwnProperty(constant.PERMISSION_ALL) &&
    permissions[module][constant.PERMISSION_ALL].includes(role)) {
    return true;
  }

  return (
    permissions[module].hasOwnProperty(permissionType) &&
    permissions[module][permissionType].includes(role)
  );
  };

export default hasPermission;
