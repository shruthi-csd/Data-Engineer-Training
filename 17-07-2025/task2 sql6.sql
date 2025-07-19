CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(100)
);

INSERT INTO departments VALUES
(1, 'Human Resources'),
(2, 'Engineering'),
(3, 'Marketing');
 
 CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(100),
  dept_id INT,
  salary INT
);

INSERT INTO employees VALUES
(101, 'Amit Sharma', 1, 28000),
(102, 'Sneha Ranjan', 2, 45000),
(103, 'Vishal Mehra', 2, 50000),
(104, 'Divya Verma', 3, 38000),
(105, 'Ravi Thakur', NULL, 25000);

SELECT e.emp_name, d.dept_name
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id;

SELECT emp_name
FROM employees
WHERE dept_id IS NULL;

SELECT d.dept_name, COUNT(e.emp_id) AS total_employees
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name;

SELECT e.emp_name, d.dept_name, e.salary
FROM employees e
JOIN departments d ON e.dept_id = d.dept_id
WHERE e.salary > 40000;
