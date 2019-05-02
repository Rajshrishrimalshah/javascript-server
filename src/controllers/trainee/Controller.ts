import * as express from "express";
<<<<<<< Updated upstream
<<<<<<< Updated upstream

=======
=======
>>>>>>> Stashed changes
import * as jwt from "jsonwebtoken"
import { validationResult } from "express-validator/check";
>>>>>>> Stashed changes
class TraineeController {
  app = express();
  router = express.Router();

  public get(req, res) {
    res.send("get method called");
  }

  public post(req, res) {
<<<<<<< Updated upstream
    res.send("post method called");
=======
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;

    try{
    let token = jwt.sign({id,name});
    }catch{

    }
    res.send(token);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }

  public put(req, res) {
    res.send("put method called");
  }

  public delete(req, res) {
    res.send("delete method called");
  }
}
export default new TraineeController();
