import * as express from "express";
import TraineeController from "./Controller";
let router = express.Router();

router.get("/get", TraineeController.getMethod);
router.post("/post", TraineeController.postMethod);

export default router;
