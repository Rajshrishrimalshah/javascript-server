import { Request, Response } from "express";
import { configuration } from "../../config";

import * as jwt from "jsonwebtoken";
class TraineeController {
  public get(req: Request, res: Response) {
    res.send("Welcome you can access file !");
  }

  public post(req: Request, res: Response) {
    res.send("Verified Token !");
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;

    const token = jwt.sign({ UserID: id, name }, configuration.secret, {
      expiresIn: 60 * 60
    });
    console.log("token generated: " + token);
  }
  public put(req: Request, res: Response) {
    res.send("put method called");
  }

  public delete(req: Request, res: Response) {
    res.send("delete method called");
  }
}
export default new TraineeController();
