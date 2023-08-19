import { Request, Response } from "express";
import { StudentService } from "./students.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.insertIntoDB(req.body);
    res.send({
      succes: true,
      message: "Student Added successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const updateStudentStatus = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.updateStudentStatus();
    res.send({
      succes: true,
      message: "Student status updated successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudents();
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getEnrolledStudentName = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getEnrolledStudentName();
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAverageAge = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAverageAge();
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getStudentEmail = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentEmail();
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const StudentController = {
  insertIntoDB,
  getStudents,
  updateStudentStatus,
  getEnrolledStudentName,
  getAverageAge,
  getStudentEmail,
};
