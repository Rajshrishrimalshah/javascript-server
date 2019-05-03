import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';
dotenv.config();

const configuration: IConfig = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  secret: process.env.SECRET_KEY,
};

Object.freeze(configuration);
export default configuration;
