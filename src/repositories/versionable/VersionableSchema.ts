import * as mongoose from "mongoose";
class VersionSchema extends mongoose.Schema {
  constructor(baseSchema, options) {
    const version = {
      _id: mongoose.Types.ObjectId ,
      createdAt:  { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
      ...baseSchema
    };
    super(version, options);
  }
}

export default VersionSchema;
