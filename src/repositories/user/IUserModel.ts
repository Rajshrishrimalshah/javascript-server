import * as mongoose from "mongoose";
export interface IUserModel extends mongoose.Document {
created: Date;
email: string;
password: string;
}
