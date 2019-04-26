import { IConfig } from "./IConfig";
import * as dotenv from "dotenv";
dotenv.config();

const configuration = {
  port: process.env.PORT,
  env: process.env.NODE_ENV
};

Object.freeze(configuration);
export default configuration;
