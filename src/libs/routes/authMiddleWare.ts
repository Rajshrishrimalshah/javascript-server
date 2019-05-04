import * as jwt from "jsonwebtoken";
import { default as hasPermission } from "../../../extraTs/utils/permissions";
import { configuration } from "../../config";

export const authMiddleWare = (module, permissionType) => (req, res, next) => {
  const authorize = "authorization";
  const bearerHeader = req.headers[authorize];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const token = bearerToken;

    jwt.verify(token, configuration.secret, (err, decode) => {
      if (err) {
        next({
          error: "Unauthorized",
          message: "Your are unauthorized",
          status: 403,
        });
      } else {
        if (hasPermission(module, decode.role, permissionType)) {
          next();
        } else {
          next({
            error: "Unauthorized",
            message: "Your are unauthorized",
            status: 403,
          });
        }
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};
