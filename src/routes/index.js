import express from "express";
const router = express.Router();

import studentRoutes from "../domains/auth/roles/student/index.js";

// modulo estudiante
router.use("/student", studentRoutes);

export default router;
