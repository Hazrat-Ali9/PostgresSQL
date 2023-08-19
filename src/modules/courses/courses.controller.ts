import { Request, Response } from "express";
import { CourseService } from "./courses.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CourseService.insertIntoDB(req.body);
    res.send({
      succes: true,
      message: "Course Added successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deleteCourseWithNoStudents = async (req: Request, res: Response) => {
  try {
    const result = await CourseService.deleteCourseWithNoStudents();
    res.send({
      succes: true,
      message: "Course deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getCourseNameAndNumberOfStudents = async (req: Request, res: Response) => {
  try {
    const result = await CourseService.getCourseNameAndNumberOfStudents();
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const CourseController = {
  insertIntoDB,
  deleteCourseWithNoStudents,
  getCourseNameAndNumberOfStudents,
};
