import * as mongoose from "mongoose";
import { userSchema } from "./UserSchema";
export const userModel = mongoose.model("user", userSchema);
