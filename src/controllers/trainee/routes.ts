import * as express from "express";
let app = express();
let router = express.Router();

class routes {
  public static get() {
    router.get("/app", (req, res) => res.send("I am app"));
  }
  public static post() {
    router.get("/app", (req, res) => res.send("I am app"));
  }
  public static put() {
    router.get("/app", (req, res) => res.send("I am app"));
  }
  public static delete() {
    router.get("/app", (req, res) => res.send("I am app"));
  }
}

export default routes;
