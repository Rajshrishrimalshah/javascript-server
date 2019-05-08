import { userRepo } from "../repositories/user/UserRepository";

export const seedData = () => {
  userRepo.count().then((result) => {
if (result === 0) {
  userRepo.create({ email: "temp@gmail.org", password: "testing"});
}
});
};
