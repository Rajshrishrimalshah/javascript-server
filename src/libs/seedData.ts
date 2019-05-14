
import * as bcrypt from "bcrypt";
import { configuration } from "../config";
import { userRepo } from "../repositories/user/UserRepository";
export const seedData = () => {
  userRepo.count().then(async (result) => {
    if (result === 0) {
      userRepo.create({
        created: new Date(),
        email: "test1@gmail.com",
        password: await bcrypt.hash("test1", parseInt((configuration.bcrypt), 10)),
        role: "trainee"
      });
      userRepo.create({
        created: new Date(),
        email: "test2@gmail.com",
        password: await bcrypt.hash("test2", parseInt((configuration.bcrypt), 10)),
        role: "trainee"
      });
      userRepo.create({
        created: new Date(),
        email: "test3@gmail.com",
        password: await bcrypt.hash("test3", parseInt((configuration.bcrypt), 10)),
        role: "trainee"
      });
    } else {
      const count = await userRepo.count();
      if (count === 0) {
        console.log("No Found Records.");
      } else {
        console.log("Found Records : " + count);
      }
    }
  });
};
