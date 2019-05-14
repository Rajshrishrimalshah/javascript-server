import * as mongoose from "mongoose";
export interface IVersionable extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}
