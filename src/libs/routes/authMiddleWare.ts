import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { default as hasPermission } from "../../../extraTs/utils/permissions";
import { configuration } from "../../config";
import { userRepo } from "../../repositories/user/UserRepository";
import { userModel } from "./../../repositories/user/UserModel";

const errorResponse = {
  error: "unauthorized",
  message: "You are unauthorized",
  status: 403
};

export const authMiddleWare = (moduleName, permissionType) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader === undefined) {
    return next({ message: "Unauthorized Access" });
  }

  const bearerToken = bearerHeader.split(" ")[1];
  jwt.verify(bearerToken, configuration.secret, {}, async (err: any, decode: any) => {
      const result = await userRepo.get({ email: decode.email });
      if (result == null) {
        next({ message: "Invalid credentials" });
      } else {
        res.locals.user = result;
      }

      if (err || !hasPermission(moduleName, res.locals.user.role , permissionType)) {
        return next(errorResponse);
      }
      next();
    }
  );
};
