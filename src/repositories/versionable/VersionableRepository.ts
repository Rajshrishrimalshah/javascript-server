import * as mongoose from "mongoose";
import { userModel } from "../user/UserModel";

export class VersionableRepository {
  constructor(private model: any) {
  }
  public create(data) {
    const id = mongoose.Types.ObjectId();
    new userModel({
      _id: id,
      ...data
    }).save();
  }

  public count() {
    return this.model.countDocuments();
  }
  public async get(data: any) {
    return this.model.findOne().where(data).select("-password");
  }

  public async getUserDetails(data: any) {
    return this.model.findOne().where(data);
  }
  public async delete(id: any) {
    return this.model.findOneAndRemove({_id: id});
  }

  public async update(query: any = {} , data) {
    return this.model.updateOne(query, data);
    }
}
