import versionschema from "../versionable/VersionableSchema";

class UserSchema extends versionschema {

  constructor(options: any) {
    const userschema = {
      email: {type: String, unique: true},
      password: { type: String},
      role: {type: String}
      };
    super(userschema, options);

}
}

export default UserSchema;
