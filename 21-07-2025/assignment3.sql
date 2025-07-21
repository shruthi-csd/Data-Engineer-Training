create database books_db;
use books_db;
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    genre VARCHAR(50),
    price DECIMAL(10,2)
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(50)
);


INSERT INTO books VALUES
(1, 'The Silent Patient', 'Alex Michaelides', 'Thriller', 650.00),
(2, 'Sapiens', 'Yuval Noah Harari', 'History', 499.00),
(3, 'Atomic Habits', 'James Clear', 'Self-Help', 550.00),
(4, 'Ikigai', 'Francesc Miralles', 'Philosophy', 300.00),
(5, '1984', 'George Orwell', 'Fiction', 700.00);

INSERT INTO customers VALUES
(101, 'Amit Sharma', 'amit@gmail.com', 'Delhi'),
(102, 'Neha Reddy', 'neha@gmail.com', 'Hyderabad'),
(103, 'Faizan Ali', 'faizan@gmail.com', 'Mumbai'),
(104, 'Divya Mehta', 'divya@gmail.com', 'Bangalore'),
(105, 'Ravi Verma', 'ravi@gmail.com', 'Hyderabad');

INSERT INTO orders VALUES
(201, 101, 1, '2023-02-15', 2),  
(202, 102, 3, '2023-03-20', 1),  
(203, 103, 5, '2022-12-01', 1),  
(204, 104, 2, '2023-04-05', 3),  
(205, 105, 1, '2023-01-10', 1),  
(206, 101, 3, '2023-05-18', 2),  
(207, 101, 2, '2023-06-01', 1);  

SELECT * FROM books
WHERE price > 500;

SELECT * FROM customers
WHERE city = 'Hyderabad';

SELECT * FROM orders
WHERE order_date > '2023-01-01';

SELECT c.name AS customer_name, b.title AS book_title
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN books b ON o.book_id = b.book_id;

SELECT b.genre, SUM(o.quantity) AS total_sold
FROM orders o
JOIN books b ON o.book_id = b.book_id
GROUP BY b.genre;

SELECT b.title, SUM(b.price * o.quantity) AS total_sales
FROM orders o
JOIN books b ON o.book_id = b.book_id
GROUP BY b.title;

SELECT c.name, COUNT(*) AS total_orders
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.name
ORDER BY total_orders DESC
LIMIT 1;

SELECT genre, AVG(price) AS avg_price
FROM books
GROUP BY genre;



