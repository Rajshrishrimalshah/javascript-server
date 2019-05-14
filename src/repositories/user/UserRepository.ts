import { VersionableRepository } from "../versionable/VersionableRepository";
import { userModel } from "./UserModel";
class UserRepository extends VersionableRepository {
  constructor() {
    super(userModel);
  }
}
export const userRepo = new UserRepository();
