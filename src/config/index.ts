import { default as configuration } from "./configuration";
import Server from "./Server";

const server = new Server(configuration);
server.bootstrap().run();
