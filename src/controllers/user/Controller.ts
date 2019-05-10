import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { configuration } from "../../config";

class UserController {
  public get(req: Request, res: Response) {
  res.send("User : get method called");
}

  public post(req: Request, res: Response) {
    const { id, email } = req.body;
    // tslint:disable-next-line:no-shadowed-variable
    const token = jwt.sign({ id, email }, configuration.secret,  {expiresIn: 600 * 60}, (err, token) => {
      res.send(token);
    });
}

  public put(req: Request, res: Response) {
  res.send("User : put method called");
}

  public delete(req: Request, res: Response) {
  res.send("User : delete method called");
}
}

export default new UserController();
