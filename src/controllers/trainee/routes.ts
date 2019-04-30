import * as express from "express";
import TraineeController from "./Controller";
let traineeRouter = express.Router();

traineeRouter.get("/get", TraineeController.getMethod);
traineeRouter.post("/post", TraineeController.postMethod);
traineeRouter.put("/put", TraineeController.putMethod);
traineeRouter.delete("/delete", TraineeController.deleteMethod);

export default traineeRouter;
