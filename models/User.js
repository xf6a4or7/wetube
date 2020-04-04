import mongoose from "mongoose ";
import passportLoclaMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avataUrl: String,
  facebookId: Number,
  githubId: Number
});

UserSchema.plugin(passportLoclaMongoose, { usernameField: "email" });

const model = mongoose.Model("user", UserSchema);

export default model;
