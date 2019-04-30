import * as express from "express";

class TraineeController {
  app = express();
  router = express.Router();

  public getMethod(req, res) {
    res.send("get method called");
  }

  public postMethod(req, res) {
    res.send("post method called");
  }

  public putMethod(req, res) {
    res.send("put method called");
  }

  public deleteMethod(req, res) {
    res.send("delete method called");
  }
}
export default new TraineeController();
