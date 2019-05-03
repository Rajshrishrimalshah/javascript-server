
import * as jwt from "jsonwebtoken"
import { validationResult } from "express-validator/check";
class TraineeController {
  public get(req, res) {
    res.send("Verified Token !");
  }

  public post(req, res) {
    res.send("Verified Token !");
  }

  public put(req, res) {
    res.send("put method called");
  }

  public delete(req, res) {
    res.send("delete method called");
  }
}
export default new TraineeController();
