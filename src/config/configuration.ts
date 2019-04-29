import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';
dotenv.config();

export const configuration:IConfig = {
  port: process.env.PORT,
  env: process.env.NODE_ENV
};

Object.freeze(configuration);

