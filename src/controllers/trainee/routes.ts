
import {  checkSchema } from "express-validator/check";
import { schema } from "./schema";

import * as express from "express";
import { authMiddleWare } from "../../libs/routes/authMiddleWare";
import TraineeController from "./Controller";
import { validation } from "./validation";

const traineeRouter: express.Router = express.Router();

traineeRouter.get("/post", checkSchema(schema.get), validation(), TraineeController.get);
traineeRouter.post("/post", checkSchema(schema.create), validation(), TraineeController.post);
traineeRouter.put("/post", checkSchema(schema.update), validation(), TraineeController.put);
traineeRouter.delete("/post", checkSchema(schema.delete), validation(), TraineeController.delete);

traineeRouter.get("/auth", authMiddleWare("getUsers", "read"), TraineeController.get);

export default traineeRouter;
