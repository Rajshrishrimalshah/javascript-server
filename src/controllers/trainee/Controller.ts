import * as express from "express";
let app = express();
let router = express.Router();

class routes {
  public getMethod() {
    router.get("/app", (req, res) => res.send("I am app"));
  }

  public postMethod() {
    router.get("/app", (req, res) => res.send("I am app"));
  }

  public putMethod() {
    router.get("/app", (req, res) => res.send("I am app"));
  }

  public deleteMethod() {
    router.get("/app", (req, res) => res.send("I am app"));
  }
}

export default new routes;
