import * as mongoose from "mongoose";
import UserSchema from "../user/UserSchema";
import { IUserModel } from "./IUserModel";

const userSchema = new UserSchema({
  collection: "user"
});
export const userModel = mongoose.model<IUserModel>("User", userSchema);
