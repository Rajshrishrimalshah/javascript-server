import { schema } from "./schema";
import {  checkSchema } from "express-validator/check";
import * as express from "express";
import TraineeController from "./Controller";
import { validation } from "./validation";
import { authMiddleWare } from "../../libs/routes/authMiddleWare";


let traineeRouter = express.Router();

traineeRouter.get("/post", checkSchema(schema.get), validation(), TraineeController.get);
traineeRouter.post("/post", checkSchema(schema.create), validation(), TraineeController.post);
traineeRouter.put("/post", checkSchema(schema.update), validation(), TraineeController.put);
traineeRouter.delete("/post", checkSchema(schema.delete), validation(), TraineeController.delete);

traineeRouter.get("/auth", authMiddleWare('getUsers','read'), TraineeController.get);


export default traineeRouter;
