import { IConfig } from "./IConfig";
import * as express from "express";

class Server {
  private port;
  app = express();

  constructor(config: IConfig) {
    this.port = process.env.PORT;
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
