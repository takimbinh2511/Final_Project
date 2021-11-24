const mongoose = require("../models/connectdb");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { collection: "User" }
);

const User = mongoose.model("User", UserSchema);
module.exports = {
  UserSchema,
  User,
};
