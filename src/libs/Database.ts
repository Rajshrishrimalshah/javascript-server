import * as mongoose from "mongoose";
import { seedData } from "./seedData";
class Database {
  public static open({ mongoUrl }) {
    return new Promise((resolve, reject) => {
      const options = {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true
      };
      try {
        mongoose.connect(mongoUrl, options);
      } catch (e) {
        console.log(e);
      }
      mongoose.connection.on("error", (err) => {
        console.log("Mongoose connection error: " + err);
        reject(err);
      });
      mongoose.connection.on("connected", () => {
        console.log("! Database connection successfully !");
        seedData();
        resolve();
      });
    });
  }

  public static disconnect() {
    mongoose.disconnect();
  }
}

export default Database;
