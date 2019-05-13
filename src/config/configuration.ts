import * as dotenv from "dotenv";
import { IConfig } from "./IConfig";

dotenv.config();

const configuration: IConfig = {
  bcrypt: process.env.BCRYPT_KEY,
  env: process.env.NODE_ENV,
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT,
  secret: process.env.SECRET_KEY
};

Object.freeze(configuration);
export default configuration;
