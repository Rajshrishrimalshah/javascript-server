import { schema } from './schema';
import { check, validationResult, checkSchema } from "express-validator/check";
import * as express from "express";
import TraineeController from "./Controller";
import{ validationMiddleware } from "./validationMiddleware"

let traineeRouter = express.Router();

traineeRouter.get("/get", validationMiddleware(schema), TraineeController.get);


traineeRouter.put("/put", TraineeController.put);
traineeRouter.delete("/delete", TraineeController.delete);

traineeRouter.post("/post",
  [
    check("email", "Invalid Email must be email address").isEmail(),
    check("password", "Invalid Password must be 3 characters").isLength({min: 3})
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors.mapped());
    if(!errors.isEmpty()){
      return res.status(422).json({errors:errors.array()});
    }
    next();
    },TraineeController.post);



export default traineeRouter;
