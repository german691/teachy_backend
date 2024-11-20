import { generate } from "../../../../utils/generators.js";
import { hashUtil } from "../../../../utils/hashData.js";
import Student from "./model.js";

// Registro de alumno post inscripción
const generateStudentUsername = async () => {
  const count = await Student.countDocuments();
  const username = `user${count + 1}`;
  return username;
};

// { firstName, secondName, brithdate: iso8601, record: id }
export const studentEntry = async (value) => {
  const username = await generateStudentUsername();
  const password = await hashUtil.hash(generate.password());
  const record = generate.record();

  const newStudent = new Student({ ...value, username, password, record });
  return await newStudent.save();
};
