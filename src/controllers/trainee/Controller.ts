import * as express from "express";
import { validationResult } from "express-validator/check";
class TraineeController {
  public get(req, res) {
    res.send("get method called");
  }

  public post(req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    res.send("ID: " + id + " NAME: " + name + " EMAIL: " + email);
  }

  public put(req, res) {
    res.send("put method called");
  }

  public delete(req, res) {
    res.send("delete method called");
  }
}
export default new TraineeController();
