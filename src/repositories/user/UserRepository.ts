import * as mongoose from "mongoose";
import { userModel } from "./UserModel";
class UserRepository {

public create(data) {
  const id = mongoose.Types.ObjectId();
  new userModel({
  _id: id,
  ...data,
  }).save();
  }

public count() {
  return userModel.countDocuments();
}
}
export const userRepo = new UserRepository();
