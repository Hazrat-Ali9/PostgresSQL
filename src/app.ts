import express, { Application } from "express";
import cors from "cors";
import { StudentRoutes } from "./modules/students/students.route";
import { CourseRoutes } from "./modules/courses/courses.route";
import { EnrollRoutes } from "./modules/enrollment/enrollment.route";
// apps ts
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/student", StudentRoutes);
app.use("/api/v1/course", CourseRoutes);
app.use("/api/v1/enrollment", EnrollRoutes);

export default app;
