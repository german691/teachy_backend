import express from "express";
import { handleStudentLogin } from "./handler.js";
const router = express.Router();

// Una vez el alumno se haya inscripto y verificado, puede acceder al aula virtual
router.post("/", handleStudentLogin);

export default router;
