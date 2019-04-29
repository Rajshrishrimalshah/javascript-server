import { diamond, equilateral } from "./patterns";

import {
  PERMISSION_ALL,
  PERMISSION_READ,
  PERMISSION_WRITE,
  PERMISSION_DELETE,
  MODULE_USER,
  ROLE_OF_TRAINER,
  ROLE_OF_TRAINEE,
  ROLL_OF_HEAD_TRAINER
} from "./constant";

import { hasPermission } from "./utils";
import { CheckEmail } from "./utils/validation";
import { users } from "./constant";

diamond(5);

equilateral(5);

console.log(hasPermission(MODULE_USER, ROLE_OF_TRAINER, PERMISSION_READ));

console.log(CheckEmail(users));
