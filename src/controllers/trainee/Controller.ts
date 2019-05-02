import * as express from "express";
import { validationResult } from "express-validator/check";
class TraineeController {
  app = express();
  router = express.Router();

  public get(req, res, next) {
    res.send("get method called");
  }

  public post(req, res) {
    res.send("post method called");
  }

  public put(req, res) {
    res.send("put method called");
  }

  public delete(req, res) {
    res.send("delete method called");
  }
}
export default new TraineeController();
