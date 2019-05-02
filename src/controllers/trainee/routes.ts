import { schema } from "./schema";
import { check, validationResult, checkSchema } from "express-validator/check";
import * as express from "express";
import TraineeController from "./Controller";
import { validation } from "./validation";

let traineeRouter = express.Router();

traineeRouter.get("/get", checkSchema(schema.create), validation(), TraineeController.get);
traineeRouter.put("/put", checkSchema(schema.update), validation(), TraineeController.put);
traineeRouter.delete("/delete", checkSchema(schema.delete), validation(), TraineeController.delete);
//traineeRouter.post("/post", validationMiddleware(schema.create),TraineeController.post);

export default traineeRouter;
