import * as express from "express";
import { checkSchema } from "express-validator/check";
import { authMiddleWareUpdate } from "../../libs/routes/authMiddleWare";
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

userRouter.get("/signin", authMiddleWareUpdate, UserController.get);

export default userRouter;
