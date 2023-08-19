import express from "express";
import { EnrollController } from "./enrollment.controller";

const router = express.Router();
// get all student name who enrolled to Next.js course
router.get("/enroll-course", EnrollController.getEnrolledStudentName);
// insert into enrollment table
router.post("/enroll-course", EnrollController.insertIntoDB);

export const EnrollRoutes = router;
