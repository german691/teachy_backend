import mongoose from "mongoose";
import ROLE from "../role.js";
import User from "../user/model.js";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  record: { type: Number, required: true, minlength: 8, maxlength: 8 },
});

const Student = User.discriminator(ROLE.student, studentSchema);

export default Student;
