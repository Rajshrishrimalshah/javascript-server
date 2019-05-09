import * as mongoose from "mongoose";
import { userModel } from "./UserModel";
class UserRepository {
  public create(data) {
    const id = mongoose.Types.ObjectId();
    new userModel({
      _id: id,
      ...data
    }).save();
  }

  public count() {
    return userModel.countDocuments();
  }
  public async getUserDetails(data: any) {
    return userModel.find().where(data).select("-password");
  }
}
export const userRepo = new UserRepository();
