import {Request, Response, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
class TraineeController {
  public get(req: Request, res: Response) {
    res.send("get method called");
  }

  public post(req: Request, res: Response) {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    res.send("ID: " + id + " NAME: " + name + " EMAIL: " + email);
  }

  public put(req: Request, res: Response) {
    res.send("put method called");
  }

  public delete(req: Request, res: Response) {
    res.send("delete method called");
  }
}
export default new TraineeController();
