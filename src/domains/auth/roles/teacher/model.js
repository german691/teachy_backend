import mongoose from "mongoose";
import ROLE from "../role.js";

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  dni: { type: String, required: true, minlength: 8, maxlength: 8 },
});

const Teacher = User.discriminator(ROLE.teacher, teacherSchema);

export default Teacher;
