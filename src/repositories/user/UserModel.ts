import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import { userSchema } from "./UserSchema";
export const userModel = mongoose.model<IUserModel>("user", userSchema);
