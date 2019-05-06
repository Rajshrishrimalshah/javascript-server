import * as mongoose from "mongoose";
export const userSchema = new mongoose.Schema({
created: { type: Date, default: Date.now },
email: String,
id: mongoose.Schema.Types.ObjectId,
password: String,
});
