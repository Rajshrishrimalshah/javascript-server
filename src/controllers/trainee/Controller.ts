import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { configuration } from "../../config";
class TraineeController {
  public get(req: Request, res: Response) {
    res.send("get method called ! ");
  }

  public post(req: Request, res: Response) {
    const { name, email, password } = req.body;
    // tslint:disable-next-line:no-shadowed-variable
    const token = jwt.sign({ email, password }, {expiresIn: 600 * 60}, configuration.secret, (err, token) => {
      res.send(token);
    });
  }
  public put(req: Request, res: Response) {
    res.send("put method called");
  }

  public delete(req: Request, res: Response) {
    res.send("delete method called");
  }
}
export default new TraineeController();
