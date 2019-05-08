import { Router } from "express";
import TraineeController from "./Controller";
const traineeRouter: Router = Router();

traineeRouter.get("/get", TraineeController.get);
traineeRouter.post("/post", TraineeController.post);
traineeRouter.put("/put", TraineeController.put);
traineeRouter.delete("/delete", TraineeController.delete);

export default traineeRouter;
