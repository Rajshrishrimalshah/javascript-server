import * as mongoose from "mongoose";
export interface IUserModel extends mongoose.Document {
email: string;
password: string;
role: string;
}
