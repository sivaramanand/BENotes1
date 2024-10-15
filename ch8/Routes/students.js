import express from "express";
const router = express.Router();
import { allStudents, deleteStudent } from "../controllers/students.js";

router.get("/all", allStudents);
router.get("/delete/:id([0-9]{2})", deleteStudent);

export default router;
