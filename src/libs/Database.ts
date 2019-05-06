import * as mongoose from "mongoose";
class Database {
  public static open({ mongoUrl }) {
    return new Promise((resolve, reject) => {
      const options = {};
      try {
      mongoose.connect(mongoUrl, { useNewUrlParser: true });
      } catch (e) {
        console.log(e);
      }
      mongoose.connection.on("error", (err) => {
        console.log("Mongoose connection error: " + err);
        reject(err);
      });
      mongoose.connection.on("connected", () => {
        console.log("! Database connection successfully !");
        resolve();
      });
    });
  }

  public static disconnect() {
    mongoose.disconnect();
  }
}

export default Database;
