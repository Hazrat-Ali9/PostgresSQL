import { Prisma, PrismaClient, Course } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
  });
  return result;
};

const deleteCourseWithNoStudents = async () => {
  const result = await prisma.course.deleteMany({
    where: {
      enrollment: {
        none: {},
      },
    },
  });
  return result;
};

const getCourseNameAndNumberOfStudents = async () => {
  const courseEnrollments = await prisma.course.findMany({
    select: {
      course_name: true,
      enrollment: {
        select: {
          student_id: true,
        },
      },
    },
  });

  const courseEnrollmentCounts = courseEnrollments.map((course) => ({
    course_name: course.course_name,
    students_enrolled: course.enrollment.length,
  }));

  return courseEnrollmentCounts;
};

export const CourseService = {
  insertIntoDB,
  deleteCourseWithNoStudents,
  getCourseNameAndNumberOfStudents,
};
