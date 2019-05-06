import * as mongoose from "mongoose";

var authorSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: String,
  password: String,
  created: { type: Date, require: true, default: Date.now }
});
