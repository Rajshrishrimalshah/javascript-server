import * as jwt from "jsonwebtoken";
import  { default as hasPermission } from "../../../extraTs/utils/permissions";
import { configuration } from "../../config";


export const authMiddleWare = (module, permissionType) => (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const token = bearerToken;

    jwt.verify(token, configuration.secret, function(err, decode) {
      if (err) {
        next({error: 'Unauthorized', status: 403, message: 'Your are unauthorized'});
      }else {
          if(hasPermission(module, decode.role, permissionType)){
              next();
          }else{
            next({error: 'Unauthorized', status: 403, message: 'Your are unauthorized'});
          }

            next();
      }
    });
  }else{
    res.sendStatus(403);
  }
  }
