import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    birthdate: { type: Date, required: true }, // iso8601
    verified: { type: Boolean, default: false },
    restricted: { type: Boolean, default: false },
  },
  {
    discriminatorKey: "role",
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
