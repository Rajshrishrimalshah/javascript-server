import { notFound } from "./libs/routes/notFoundRoute";
import { IConfig } from "./config";
import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler } from "./libs/routes/errorHandler";
import { configuration } from "./config"
import {default as router} from "./controllers/trainee/routes";
class Server {
  private port;
  app = express();

  constructor(configuration) {
    this.port = configuration.port;
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
    this.app.use("/api",router);

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
