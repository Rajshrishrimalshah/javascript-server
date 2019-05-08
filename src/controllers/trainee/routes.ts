
import {  checkSchema } from "express-validator/check";
import { configuration } from "../../config";
import { schema } from "./schema";

import * as express from "express";
import * as jwt from "jsonwebtoken";
import { authMiddleWare, authMiddleWareUpdate } from "../../libs/routes/authMiddleWare";
import TraineeController from "./Controller";
import { validation } from "./validation";

const traineeRouter: express.Router = express.Router();

traineeRouter.get("/post", checkSchema(schema.get), validation(), TraineeController.get);
traineeRouter.post("/post", checkSchema(schema.create), validation(), TraineeController.post);
traineeRouter.put("/post", checkSchema(schema.update), validation(), TraineeController.put);
traineeRouter.delete("/post", checkSchema(schema.delete), validation(), TraineeController.delete);

traineeRouter.post("/signup", checkSchema(schema.create), validation(), TraineeController.post);
traineeRouter.get("/signin", checkSchema(schema.get), validation(), TraineeController.get);

traineeRouter.get("/auth", authMiddleWare("getUsers", "read"), TraineeController.get);

traineeRouter.get("/token", (req, res ) => {
  const { id, email } = req.body;
  const token = jwt.sign({ email, id }, configuration.secret, {
    expiresIn: 60 * 60
  });
  res.send(token);
}, TraineeController.get);

traineeRouter.get("/check", authMiddleWareUpdate, TraineeController.get);

export default traineeRouter;
