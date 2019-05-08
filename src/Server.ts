import { notFoundRoute } from "./libs";
import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler } from "./libs/routes/errorHandler";
import { traineeRouter } from "./router";
class Server {
  public app: express.Express;

  constructor(private configuration) {
    this.app = express();
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
    this.app.use("/api", traineeRouter);


    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  };

  public run() {
    this.app.listen(this.configuration.port, () =>
      console.log(`Example app listening on port ${this.configuration.port}!`)
    );
  }
}

export default Server;
