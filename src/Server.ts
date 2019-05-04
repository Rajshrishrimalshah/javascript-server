import { configuration } from "./config";
import { notFound } from "./libs/routes/notFoundRoute";
import { TROUTER } from "./router";

import * as bodyParser from "body-parser";
import * as express from "express";
import { default as Database } from "./libs/Database";
import { errorHandler } from "./libs/routes/errorHandler";

class Server {
  public app = express();
  private port;

  constructor(configuration: any) {
    this.port = configuration.port;
  }

  public initBodyParser = () => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public bootstrap = () => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public setupRoutes = () => {
    this.app.use("/api", TROUTER);
    this.app.use(errorHandler);
    this.app.use(notFound);
  }

  public run() {
    Database.open({ mongoUrl: configuration.mongoUrl }).then(() => {
      this.app.listen(this.port, () =>
      console.log(`Example app listening on port ${this.port}!`));
      console.log("success");
    })
    .catch((err) => {
      console.log("Error");
    });
  }
}

export default Server;
