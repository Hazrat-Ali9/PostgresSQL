import { Request, Response } from "express";
import { EnrollmentService } from "./enrollment.service";
// enrollment Controll
const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await EnrollmentService.insertIntoDB(req.body);
    res.send({
      succes: true,
      message: "Course Enrolled successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

// const insertOrUpdateProfile = async (req: Request, res: Response) => {
//   try {
//     const result = await UserService.insertOrUpdateProfile(req.body);
//     res.send({
//       succes: true,
//       message: "Profile created/updated successfully!",
//       data: result,
//     });
//   } catch (err) {
//     res.send(err);
//   }
// };

const getEnrolledStudentName = async (req: Request, res: Response) => {
  try {
    const result = await EnrollmentService.getEnrolledStudentName();
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};



export const EnrollController = {
  insertIntoDB,
  getEnrolledStudentName,
  //   insertOrUpdateProfile,
  //   getUsers,
  //   getSingleUser,
};
