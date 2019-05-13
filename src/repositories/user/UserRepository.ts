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
    return userModel.findOne().where(data).select("-password");
  }

  public async getUserDetailsByID(id: any) {
    return userModel.findOne({_id: id});
  }
}
export const userRepo = new UserRepository();
