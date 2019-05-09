import { userRepo } from "../repositories/user/UserRepository";
export const seedData = () => {
  userRepo.count().then((result) => {
    if (result === 0) {
      userRepo.create({
        created: new Date(), email: "test1@gmail.com", password: "testing",
      });
      userRepo.create({
      created: new Date(), email: "test2@gmail.com", password: "testing1",
      });
      userRepo.create({
        created: new Date(), email: "temp3@gmail.com", password: "testing1",
        });
    } else {
      userRepo.count().then((count) => {
        if (count === 0) {
          console.log("No Found Records.");
        } else {
          console.log("Found Records : " + count);
        }
      });
    }
  });
};
