import { Prisma, PrismaClient, Course, Enrollment } from "@prisma/client";
// Enrollment Service
const prisma = new PrismaClient();

const insertIntoDB = async (data: Enrollment): Promise<Enrollment> => {
  const result = await prisma.enrollment.create({
    data,
  });
  return result;
};

// const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
//   const isExist = await prisma.profile.findUnique({
//     where: {
//       userId: data.userId,
//     },
//   });

//   if (isExist) {
//     const result = await prisma.profile.update({
//       where: {
//         userId: data.userId,
//       },
//       data: {
//         bio: data.bio,
//       },
//     });

//     return result;
//   }

//   const result = await prisma.profile.create({
//     data,
//   });
//   return result;
// };

// const getUsers = async () => {
//   // const result = await prisma.user.findMany({
//   //     // select: {
//   //     //     email: true,
//   //     //     name: true
//   //     // }
//   //     include: {
//   //         profile: true
//   //     }
//   // });

//   const result = await prisma.$queryRaw`select * from users`;
//   return result;
// };

// const getSingleUser = async (id: number) => {
//   const result = await prisma.user.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       profile: true,
//     },
//   });
//   return result;
// };

// get all student name who enrolled to Next.js course
const getEnrolledStudentName = async () => {

  const result = await prisma.enrollment.findMany({
    where: {
      course_id: 1,
    },
    select: {
      student: {
        select: {
          student_name: true,
        },
      },
    },
  });

  return result;
};

export const EnrollmentService = {
  insertIntoDB,
  getEnrolledStudentName,
  //   insertOrUpdateProfile,
  //   getUsers,
  //   getSingleUser,
};
