import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { configuration } from "../../config";
import { errorHandler } from "../../libs/routes/errorHandler";
import { userRepo } from "../../repositories/user/UserRepository";

class UserController {
  public get(req: Request, res: Response) {
    const user = res.locals.user;
    res.send(user);
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

  public async delete(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const result = await userRepo.get({ email });
    if (result === null) {
        next({ message: "Invalid credentials" });
      } else {
        userRepo.delete(result.id);
        res.send("User deleted !");
      }

}
public async updateMethod(req: Request, res: Response) {
  try {
    await userRepo.update(
    { email: req.body.email },
    { role: req.body.role },
    );
    res.status(200).json("User updated !");
    } catch {
      console.log(errorHandler);
    }
  }
}

export default new UserController();
