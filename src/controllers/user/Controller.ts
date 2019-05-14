import * as bcrypt from "bcrypt";
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

  public async post(req: Request, res: Response, next: NextFunction) {
    try {
    const { email, password }  = req.body;
    const result = await userRepo.getUserDetails({ email });
    if (!result) {
    next({ message: "either email or password incorrect" });
  } else {
    const check = await bcrypt.compare(password, result.password);
    if (!check) {
      next({ message: "either email or password incorrect" });
      } else {
        const token = jwt.sign({ email, id: result.id }, configuration.secret,  {expiresIn: 60 * 15}, (err, token) => {
          res.send(token);
      });
      }}
    } catch (err) {
      console.log("Error");
    }
}

  public put(req: Request, res: Response) {
  res.send("User : put method called");
}

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
    const { email } = req.body;
    const result = await userRepo.get({ email });
    if (result === null) {
        next({ message: "Invalid credentials" });
      } else {
        userRepo.delete(result.id);
        res.send("User deleted !");
      }
    } catch (err) {
      console.log("Error !");
    }

}
public async update(req: Request, res: Response) {
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
