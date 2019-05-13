import * as mongoose from "mongoose";
import { seedData } from "./seedData";
class Database {
  public static async open({ mongoUrl }) {
      const options = {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true
      };

      mongoose.connect(mongoUrl, options);
      mongoose.connection.on("error", (err) => {
        return err;
      });
      mongoose.connection.on("connected", () => {
        console.log("! Database connection successfully !");
        seedData();
      });
  }

  public static disconnect() {
    mongoose.disconnect();
  }
}

export default Database;
