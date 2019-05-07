import * as bodyParser from "body-parser";
import * as express from "express";
import { configuration } from "./config";
import { notFoundRoute } from "./libs";
import { traineeRouter } from "./router";

import { default as Database } from "./libs/Database";
import { errorHandler } from "./libs/routes/errorHandler";

class Server {
  public app: express.Express;

  constructor(private configuration) {
    this.app = express();
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
    this.app.use("/api", traineeRouter);

    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public run() {
    Database.open({ mongoUrl: configuration.mongoUrl }).then(() => {
      this.app.listen(this.configuration.port, () =>
      console.log(`Example app listening on port ${this.configuration.port}!`));
  });
  }
}

export default Server;
