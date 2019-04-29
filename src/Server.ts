import { configuration } from './config/configuration';
import { IConfig } from "./config";
import * as express from "express";

class Server {
  private port:number;
  public app;
  constructor(configuration) {
    this.port = configuration.port;
    this.app = express();
  }

  bootstrap() {
    this.setupRoutes();
    return this;
  }

  setupRoutes() {
    this.app.get("/health-check", (req, res) => res.send("I am OK"));
  }

  run() {
    this.app.listen(this.port, () =>
      console.log(`Example app listening on port ${this.port}!`)
    );
  }

}

export default Server;
