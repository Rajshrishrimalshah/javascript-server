import * as express from "express";
import { checkSchema } from "express-validator/check";
import { authMiddleWare } from "../../libs/routes/authMiddleWare";
import UserController from "./Controller";
import { schema } from "./schema";
import { validation } from "./validation";

const userRouter: express.Router = express.Router();

userRouter.get("/profile", authMiddleWare("getUsers", "read"), validation(), UserController.get);
userRouter.delete("/delete", authMiddleWare("getUsers", "read"), validation(),  UserController.delete);
userRouter.put("/update", authMiddleWare("getUsers", "read"), validation(), UserController.update);

userRouter.get("/auth", UserController.post);

export default userRouter;
