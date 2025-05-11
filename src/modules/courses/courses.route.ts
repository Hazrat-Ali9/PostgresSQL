import express from "express";
import { CourseController } from "./courses.controller";
// Courses Route
const router = express.Router();

// add course route
router.post("/add-course", CourseController.insertIntoDB);
// Delete all courses that have no students enrolled.
router.delete("/delete-course", CourseController.deleteCourseWithNoStudents);
// Retrieve the course names and the number of students enrolled in each course.
router.get(
  "/get-student-and-coursename",
  CourseController.getCourseNameAndNumberOfStudents
);

export const CourseRoutes = router;
