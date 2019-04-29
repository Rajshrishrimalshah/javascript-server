import routes from "./controllers/trainee/Controller"
import * as express from "express";
var app = express();
var router = express.Router();

let r1= new routes;

router.get("/app",r1.get);
