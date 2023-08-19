-- create fresh db
CREATE DATABASE university_db;

CREATE TABLE students (
  student_id serial PRIMARY KEY,
  student_name varchar(255) NOT NULL,
  age integer NOT NULL,
  email varchar(255) NOT NULL,
  frontend_mark integer,
  backend_mark integer,
  status varchar(255)
);

CREATE TABLE courses (
  course_id serial PRIMARY KEY,
  course_name varchar(255) NOT NULL,
  credits integer NOT NULL
);

CREATE TABLE enrollments (
  enrollment_id serial PRIMARY KEY,
  student_id integer REFERENCES students (student_id),
  course_id integer REFERENCES courses (course_id)
);

INSERT INTO students (student_name, age, email, frontend_mark, backend_mark, status)
VALUES
('Alice', 22, 'alice@example.com', 55, 57, NULL),
('Bob', 21, 'bob@example.com', 34, 45, NULL),
('Charlie', 23, 'charlie@example.com', 60, 59, NULL),
('David', 20, 'david@example.com', 40, 49, NULL),
('Eve', 24, 'newemail@example.com', 45, 34, NULL),
('Rahim', 23, 'rahim@gmail.com', 46, 42, NULL);

INSERT INTO courses (course_name, credits)
VALUES
('Next.js', 3),
('React.js', 4),
('Databases', 3),
('Prisma', 3);

INSERT INTO enrollments (student_id, course_id)
VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 2);


-- Query 1: Insert a new student record
INSERT INTO students (student_name, age, email, frontend_mark, backend_mark, status)
VALUES
('siam', 15, 'yourname@c.com', 50, 89, NULL);

-- Query 2: Retrieve the names of all students who are enrolled in the course titled 'Next.js'
SELECT student_name
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
WHERE enrollments.course_id IN (
    SELECT course_id
    FROM courses
    WHERE course_name = 'Next.js'
);

-- Query 3: Update the status of the student with the highest total (frontend_mark + backend_mark) mark to 'Awarded'
UPDATE students
SET status = 'Awarded'
WHERE student_id = (
    SELECT student_id
    FROM students
    ORDER BY frontend_mark + backend_mark DESC
    LIMIT 1
);

-- Query 4: Delete all courses that have no students enrolled.
DELETE FROM courses
WHERE course_id NOT IN (
    SELECT course_id
    FROM enrollments
);

-- Query 5: Retrieve the names of students using a limit of 2, starting from the 3rd student.
SELECT student_name
FROM students
ORDER BY student_id
OFFSET 2
LIMIT 2;

-- Query 6: Retrieve the course names and the number of students enrolled in each course.
SELECT course_id, COUNT(*) AS students_enrolled
FROM enrollments
GROUP BY course_id;

-- Query 7: Calculate and display the average age of all students.
SELECT AVG(age) AS average_age
FROM students;

-- Query 8: Retrieve the names of students whose email addresses contain 'example.com'.
SELECT student_name
FROM students
WHERE email LIKE '%example.com';