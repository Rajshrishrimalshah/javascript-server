import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { configuration } from "../../config";
class TraineeController {
  public get(req: Request, res: Response) {
    res.send("Welcome you can access file !");
  }

  public post(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const token = jwt.sign({ email }, configuration.secret, {
      expiresIn: 60 * 60
    });
    res.send("Token generated:   " + token);
  }
  public put(req: Request, res: Response) {
    res.send("put method called");
  }

  public delete(req: Request, res: Response) {
    res.send("delete method called");
  }
}
export default new TraineeController();
