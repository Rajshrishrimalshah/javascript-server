import { notFound } from "./libs/routes/notFoundRoute";
import { IConfig } from "./config/IConfig";
import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler } from "./libs/routes/errorHandler";

class Server {
  private port;
  app = express();

  constructor(config: IConfig) {
    this.port = process.env.PORT;
  }

  public initBodyParser = () => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  };

  public bootstrap = () => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  };

  public setupRoutes = () => {
    this.app.get("/health-check", (req, res) => res.send("I am OK"));

    this.app.post("/app", (req, res) => {
      res.send("I am Fine !");
    });

    this.app.get("/check-error", (req, res) => {
      throw new Error("i am error");
    });
    this.app.use(errorHandler);
    this.app.use(notFound);

  };

  public run() {
    this.app.listen(this.port, () =>
      console.log(`Example app listening on port ${this.port}!`)
    );
  }
}

export default Server;
