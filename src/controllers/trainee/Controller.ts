import * as express from "express";
import * as jwt from "jsonwebtoken";

class TraineeController {
  public get(req: express.Request, res: express.Response) {
    res.send("get method called");
  }

  public post(req: express.Request, res: express.Response) {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    res.send("ID: " + id + " NAME: " + name + " EMAIL: " + email);
  }

  public put(req: express.Request, res: express.Response) {
    res.send("put method called");
  }

  public delete(req: express.Request, res: express.Response) {
    res.send("delete method called");
  }
}
export default new TraineeController();
