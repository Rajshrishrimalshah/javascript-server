import * as jwt from "jsonwebtoken";
import { Request, Response}  from "express";
import { configuration } from "src/config";
class TraineeController {
  public get(req: Request, res: Response) {
    res.send("Welcome you can access file !");
  }

  public post(req: Request, res: Response) {
    res.send("Verified Token !");
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;

    const token = jwt.sign({ UserID: id, name }, configuration.secret, {
      expiresIn: 60 * 60
    });
    console.log("token generated: " + token);
  }
  public put(req: Request, res: Response) {
    res.send("put method called");
  }

  public delete(req:Request, res: Response) {
    res.send("delete method called");
  }
}
export default new TraineeController();
