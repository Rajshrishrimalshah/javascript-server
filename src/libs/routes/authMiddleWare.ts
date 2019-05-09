import * as jwt from "jsonwebtoken";
import { default as hasPermission } from "../../../extraTs/utils/permissions";
import { configuration } from "../../config";
import { userRepo } from "../../repositories/user/UserRepository";
import { userModel } from "./../../repositories/user/UserModel";

export const authMiddleWare = (module, permissionType) => (req, res, next) => {
  const auth = "authorization";
  const bearerHeader = req.headers[auth];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const token = bearerToken;

    jwt.verify(token, configuration.secret, {}, (err, decode) => {
      if (err) {
        next({
          error: "Unauthorized",
          message: "Your are unauthorized",
          status: 403
        });
      } else {
        if (hasPermission(module, decode.role, permissionType)) {
            next();
        } else {
          next({
            error: "Unauthorized",
            message: "Either Module or Permission incorrect",
            status: 403
          });
        }
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

export const authMiddleWareUpdate = (req, res, next) => {

  const bearerHeader = req.header("authorization");
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const token = bearerToken;

    jwt.verify(token, configuration.secret, {}, (err, decode) => {
      if (err) {
        next({
          error: "Unauthorized",
          message: "Your are unauthorized",
          status: 403
        });
      } else {
        // tslint:disable-next-line:no-shadowed-variable
        userModel.find({email: decode.email}, async (err, data) => {
          if (err) {
              console.log(err);
              return;
          }

          if (data.length === 0) {
              next({
                error: "Invalid user",
                message: "either email or password incorrect",
                status: 403
              });
            }

          const response = await userRepo.getUserDetails({email: decode.email});
          res.json(response);
      });
      }
    });
  }
};
