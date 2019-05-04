import * as jwt from "jsonwebtoken";
import { validationResult } from "express-validator/check";
import * as express from "express";
import { configuration } from "src/config";
class TraineeController {
  public get(req, res) {
    res.send("Welcome you can access file !");
  }

  public post(req, res) {
    res.send("Verified Token !");
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;

    const token = jwt.sign({ UserID: id, name }, configuration.secret, {
      expiresIn: 60 * 60
    });
    console.log("token generated: " + token);
  }
  public put(req, res) {
    res.send("put method called");
  }

  public delete(req, res) {
    res.send("delete method called");
  }
}
export default new TraineeController();
