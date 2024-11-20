import CustomError from "../../../../middlewares/error/CustomError.js";
import { studentEntry } from "./controller.js";
import { StudentEntryScheme } from "./validation.js";

export const handleStudentEntry = async (req, res, next) => {
  try {
    const { error, value } = StudentEntryScheme.validate(req.body);
    if (error) {
      throw error;
    }

    await studentEntry(value);

    return res.status(200).json({ message: "Student successfully registered" });
  } catch (error) {
    next(error);
  }
};
