import { configuration } from "./config/configuration";
import Server from "./Server";
import { IConfig } from "./config";

const server:Server = new Server(configuration);
server.bootstrap().run();
