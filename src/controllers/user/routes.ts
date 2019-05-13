import * as express from "express";
import { checkSchema } from "express-validator/check";
import { authMiddleWare } from "../../libs/routes/authMiddleWare";
import UserController from "./Controller";
import { schema } from "./schema";
import { validation } from "./validation";

const userRouter: express.Router = express.Router();
userRouter.post(
  "/signup",
  checkSchema(schema.signup),
  validation(),
  UserController.post
);

userRouter.get("/signin", authMiddleWare("getUsers", "read"), UserController.get);
userRouter.delete("/delete", UserController.delete);
userRouter.put("/update", UserController.updateMethod);

export default userRouter;
