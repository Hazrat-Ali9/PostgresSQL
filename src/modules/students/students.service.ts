import { Prisma, PrismaClient, Student } from "@prisma/client";
// student service 
const prisma = new PrismaClient();

const insertIntoDB = async (data: Student): Promise<Student> => {
  const result = await prisma.student.create({
    data,
  });
  return result;
};

const updateStudentStatus = async () => {
  const highestFrontendNumber = await prisma.student.findFirst({
    orderBy: {
      frontend_mark: "desc",
    },
  });
  const highestBackendNumber = await prisma.student.findFirst({
    orderBy: {
      backend_mark: "desc",
    },
  });

  if (highestFrontendNumber?.student_id && highestBackendNumber?.student_id) {
    const result = await prisma.student.update({
      where: {
        student_id: highestFrontendNumber.student_id,
      },
      data: {
        status: "Awarded",
      },
    });
    return result;
  }
};

const getStudents = async () => {
  const result = await prisma.student.findMany({
    select: {
      student_name: true,
    },
  });

  return result;
};

// Retrieve the names of students using a limit of 2, starting from the 3rd student.
const getEnrolledStudentName = async () => {
  const result = await prisma.student.findMany({
    select: {
      student_name: true,
    },
    skip: 2,
    take: 2,
  });
  return result;
};

// Calculate and display the average age of all students.

const getAverageAge = async () => {
  const result = await prisma.student.aggregate({
    _avg: {
      age: true,
    },
  });
  return {
    average_age: result._avg.age,
  };
};

// Retrieve the names of students whose email addresses contain 'example.com'.

const getStudentEmail = async () => {
  const result = await prisma.student.findMany({
    where: {
      email: {
        contains: "example.com",
        mode: "insensitive",
      },
    },
    select: {
      student_name: true,
    },
  });
  return result;
};


export const StudentService = {
  insertIntoDB,
  getStudents,
  updateStudentStatus,
  getEnrolledStudentName,
  getAverageAge,
  getStudentEmail,
};
