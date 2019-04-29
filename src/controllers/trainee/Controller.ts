import * as express from "express";
let app = express();
let router = express.Router();

class routes {
  public get() {
    router.get("/app", (req, res) => res.send("I am app"));
  }

  public post() {
    router.get("/app", (req, res) => res.send("I am app"));
  }

  public put() {
    router.get("/app", (req, res) => res.send("I am app"));
  }

  public delete() {
    router.get("/app", (req, res) => res.send("I am app"));
  }
}

export default routes;
