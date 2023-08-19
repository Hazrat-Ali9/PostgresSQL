import express from "express";
import { StudentController } from "./students.controller";

const router = express.Router();
// get all students
router.get("/", StudentController.getStudents);
// Update the status of the student with the highest total (frontend_mark + backend_mark) mark to 'Awarded'
router.patch("/update-status", StudentController.updateStudentStatus);
// insert into student table
router.post("/add-student", StudentController.insertIntoDB);
// Retrieve the names of students using a limit of 2, starting from the 3rd student.
router.get("/get-student-pagination", StudentController.getEnrolledStudentName);
// Calculate and display the average age of all students.
router.get("/get-average-age", StudentController.getAverageAge);
// Retrieve the names of students whose email addresses contain 'example.com'.
router.get("/get-student-email", StudentController.getStudentEmail);

export const StudentRoutes = router;
