create database movies_db;
use movies_db;

CREATE TABLE movies (
  movie_id INT PRIMARY KEY,
  title VARCHAR(100),
  genre VARCHAR(50),
  release_year INT,
  rental_rate DECIMAL(5,2)
);

CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  city VARCHAR(50)
);

CREATE TABLE rentals (
  rental_id INT PRIMARY KEY,
  customer_id INT,
  movie_id INT,
  rental_date DATE,
  return_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

INSERT INTO movies VALUES 
(1, 'The Time Traveler', 'Sci-Fi', 2021, 150.00),
(2, 'Love in Paris', 'Romance', 2022, 120.00),
(3, 'The Silent War', 'Action', 2019, 180.00),
(4, 'Comedy Nights', 'Comedy', 2023, 100.00),
(5, 'Mystic Land', 'Fantasy', 2020, 130.00);

INSERT INTO customers VALUES 
(1, 'Amit Sharma', 'amit@example.com', 'Delhi'),
(2, 'Priya Mehta', 'priya@example.com', 'Bangalore'),
(3, 'Rahul Singh', 'rahul@example.com', 'Mumbai'),
(4, 'Sneha Iyer', 'sneha@example.com', 'Chennai'),
(5, 'Arjun Patel', 'arjun@example.com', 'Hyderabad');

INSERT INTO rentals VALUES
(1, 1, 1, '2023-06-01', '2023-06-05'),  
(2, 1, 2, '2023-06-10', NULL),          
(3, 2, 3, '2023-06-11', '2023-06-13'),  
(4, 2, 4, '2023-06-15', '2023-06-18'), 
(5, 3, 1, '2023-06-20', NULL),          
(6, 3, 2, '2023-06-22', '2023-06-25'),  
(7, 4, 5, '2023-06-23', '2023-06-27'),  
(8, 5, 2, '2023-06-24', '2023-06-28');  

SELECT m.*
FROM movies m
JOIN rentals r ON m.movie_id = r.movie_id
JOIN customers c ON c.customer_id = r.customer_id
WHERE c.name = 'Amit Sharma';

SELECT * FROM customers WHERE city = 'Bangalore';

SELECT * FROM movies WHERE release_year > 2020;

SELECT c.name, COUNT(r.rental_id) AS total_rentals
FROM customers c
JOIN rentals r ON c.customer_id = r.customer_id
GROUP BY c.name;

SELECT m.title, COUNT(r.rental_id) AS rental_count
FROM movies m
JOIN rentals r ON m.movie_id = r.movie_id
GROUP BY m.title
ORDER BY rental_count DESC
LIMIT 1;

SELECT SUM(m.rental_rate) AS total_revenue
FROM rentals r
JOIN movies m ON r.movie_id = m.movie_id;

SELECT * 
FROM customers 
WHERE customer_id NOT IN (
  SELECT DISTINCT customer_id FROM rentals
);

SELECT m.genre, SUM(m.rental_rate) AS genre_revenue
FROM rentals r
JOIN movies m ON r.movie_id = m.movie_id
GROUP BY m.genre;

SELECT c.name, SUM(m.rental_rate) AS total_spent
FROM rentals r
JOIN customers c ON c.customer_id = r.customer_id
JOIN movies m ON m.movie_id = r.movie_id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 1;

SELECT DISTINCT m.title
FROM movies m
JOIN rentals r ON m.movie_id = r.movie_id
WHERE r.return_date IS NULL;


