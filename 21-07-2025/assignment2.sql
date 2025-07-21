create database students_db;
use students_db;

CREATE TABLE students (
student_id INT PRIMARY KEY,
name VARCHAR(100),
age INT,
gender VARCHAR(10),
department_id INT
);

CREATE TABLE departments (
department_id INT PRIMARY KEY,
department_name VARCHAR(100),
head_of_department VARCHAR(100)
);

CREATE TABLE courses (
course_id INT PRIMARY KEY,
course_name VARCHAR(100),
department_id INT,
credit_hours INT
);

INSERT INTO students VALUES
(1, 'Amit Sharma', 20, 'Male', 1),
(2, 'Neha Reddy', 22, 'Female', 2),
(3, 'Faizan Ali', 21, 'Male', 1),
(4, 'Divya Mehta', 23, 'Female', 3),
(5, 'Ravi Verma', 22, 'Male', 2);

INSERT INTO departments VALUES
(1, 'Computer Science', 'Dr. Rao'),
(2, 'Electronics', 'Dr. Iyer'),
(3, 'Mechanical', 'Dr. Khan');

INSERT INTO courses VALUES
(101, 'Data Structures', 1, 4),
(102, 'Circuits', 2, 3),
(103, 'Thermodynamics', 3, 4),
(104, 'Algorithms', 1, 3),
(105, 'Microcontrollers', 2, 2);

SELECT name, age, gender
FROM students;

SELECT name
FROM students
WHERE gender = 'Female';

SELECT c.course_name
FROM courses c
JOIN departments d ON c.department_id = d.department_id
WHERE d.department_name = 'Electronics';

SELECT department_name, head_of_department
FROM departments
WHERE department_id = 1;

SELECT * FROM students
WHERE age > 21;

SELECT s.name, d.department_name
FROM students s
JOIN departments d ON s.department_id = d.department_id;

SELECT d.department_name, COUNT(s.student_id) AS student_count
FROM departments d
LEFT JOIN students s ON d.department_id = s.department_id
GROUP BY d.department_name;

SELECT d.department_name, AVG(s.age) AS avg_age
FROM students s
JOIN departments d ON s.department_id = d.department_id
GROUP BY d.department_name;

SELECT c.course_name, d.department_name
FROM courses c
JOIN departments d ON c.department_id = d.department_id;

SELECT d.department_name
FROM departments d
LEFT JOIN students s ON d.department_id = s.department_id
WHERE s.student_id IS NULL;

SELECT d.department_name, COUNT(c.course_id) AS course_count
FROM departments d
JOIN courses c ON d.department_id = c.department_id
GROUP BY d.department_name
ORDER BY course_count DESC
LIMIT 1;

SELECT name
FROM students
WHERE age > (SELECT AVG(age) FROM students);

SELECT DISTINCT d.department_name
FROM departments d
JOIN courses c ON d.department_id = c.department_id
WHERE c.credit_hours > 3;

SELECT s.name
FROM students s
WHERE s.department_id = (
    SELECT department_id
    FROM courses
    GROUP BY department_id
    ORDER BY COUNT(course_id)
    LIMIT 1
);

SELECT s.name
FROM students s
JOIN departments d ON s.department_id = d.department_id
WHERE d.head_of_department LIKE '%Dr.%';

SELECT name, age
FROM students
ORDER BY age DESC
LIMIT 1 OFFSET 1;

SELECT name, age
FROM students
WHERE age = (
    SELECT MAX(age)
    FROM students
    WHERE age < (SELECT MAX(age) FROM students)
);

SELECT c.course_name
FROM courses c
WHERE c.department_id IN (
    SELECT department_id
    FROM students
    GROUP BY department_id
    HAVING COUNT(student_id) > 2
);
