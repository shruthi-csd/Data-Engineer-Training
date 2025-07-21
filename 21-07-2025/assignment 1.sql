CREATE DATABASE company_db;
USE company_db;

CREATE TABLE employees (
emp_id INT PRIMARY KEY,
emp_name VARCHAR(100),
department VARCHAR(50),
salary INT,
age INT
);
CREATE TABLE departments (
dept_id INT PRIMARY KEY,
dept_name VARCHAR(50),
location VARCHAR(50)
);
INSERT INTO employees VALUES
(101, 'Amit Sharma', 'Engineering', 60000, 30),
(102, 'Neha Reddy', 'Marketing', 45000, 28),
(103, 'Faizan Ali', 'Engineering', 58000, 32),
(104, 'Divya Mehta', 'HR', 40000, 29),
(105, 'Ravi Verma', 'Sales', 35000, 26);
INSERT INTO departments VALUES
(1, 'Engineering', 'Bangalore'),
(2, 'Marketing', 'Mumbai'),
(3, 'HR', 'Delhi'),
(4, 'Sales', 'Chennai');

select * from employees;

select * from departments;

SELECT emp_name, salary FROM employees;

SELECT * FROM employees
WHERE salary > 40000;

SELECT * FROM employees
WHERE age BETWEEN 28 AND 32;

SELECT * FROM employees
WHERE department != 'HR';

SELECT * FROM employees
ORDER BY salary DESC;

SELECT COUNT(*) AS total_employees FROM employees;

SELECT * FROM employees
ORDER BY salary DESC
LIMIT 1;

SELECT e.emp_name, d.location
FROM employees e
JOIN departments d ON e.department = d.dept_name;

SELECT d.dept_name, COUNT(e.emp_id) AS employee_count
FROM departments d
LEFT JOIN employees e ON d.dept_name = e.department
GROUP BY d.dept_name;

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;

SELECT d.dept_name
FROM departments d
LEFT JOIN employees e ON d.dept_name = e.department
WHERE e.emp_id IS NULL;

SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 45000;

SELECT emp_name, department
FROM employees
WHERE salary > 50000;


