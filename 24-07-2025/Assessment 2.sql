create database Travel;
use Travel;

CREATE TABLE Destinations (
  destination_id INT PRIMARY KEY,
  city VARCHAR(50),
  country VARCHAR(50),
  category VARCHAR(20),
  avg_cost_per_day INT
);

CREATE TABLE Trips (
  trip_id INT PRIMARY KEY,
  destination_id INT,
  traveler_name VARCHAR(50),
  start_date DATE,
  end_date DATE,
  budget INT,
  FOREIGN KEY (destination_id) REFERENCES Destinations(destination_id)
);


INSERT INTO Destinations VALUES
(1, 'Goa', 'India', 'Beach', 2500),
(2, 'Paris', 'France', 'Historical', 7000),
(3, 'Manali', 'India', 'Nature', 2000),
(4, 'Cairo', 'Egypt', 'Historical', 3500),
(5, 'Queenstown', 'New Zealand', 'Adventure', 8000),
(6, 'Bali', 'Indonesia', 'Beach', 3000);

INSERT INTO Trips VALUES
(1, 1, 'Amit Sharma', '2025-03-01', '2025-03-05', 15000),
(2, 2, 'Sara Khan', '2024-06-10', '2024-06-15', 40000),
(3, 3, 'Ravi Mehta', '2025-01-20', '2025-01-27', 16000),
(4, 5, 'Emily Chen', '2023-12-01', '2023-12-10', 85000),
(5, 4, 'Ali Hussain', '2024-02-05', '2024-02-10', 20000),
(6, 6, 'Nina Das', '2025-05-10', '2025-05-14', 12000),
(7, 3, 'Ravi Mehta', '2025-07-01', '2025-07-05', 10000),
(8, 1, 'Amit Sharma', '2023-08-10', '2023-08-14', 13000),
(9, 2, 'Nina Das', '2024-12-20', '2024-12-27', 60000),
(10, 5, 'John Lee', '2025-01-15', '2025-01-22', 90000);

SELECT * FROM Trips t
JOIN Destinations d ON t.destination_id = d.destination_id
WHERE d.country = 'India';

SELECT * FROM Destinations
WHERE avg_cost_per_day < 3000;

SELECT trip_id, DATEDIFF(end_date, start_date) + 1 AS num_days
FROM Trips;

SELECT * FROM Trips
WHERE DATEDIFF(end_date, start_date) + 1 > 7;

SELECT t.traveler_name, d.city, 
       (DATEDIFF(t.end_date, t.start_date) + 1) * d.avg_cost_per_day AS total_cost
FROM Trips t
JOIN Destinations d ON t.destination_id = d.destination_id;

SELECT d.country, COUNT(*) AS total_trips
FROM Trips t
JOIN Destinations d ON t.destination_id = d.destination_id
GROUP BY d.country;

SELECT d.country, AVG(t.budget) AS avg_budget
FROM Trips t
JOIN Destinations d ON t.destination_id = d.destination_id
GROUP BY d.country;

SELECT traveler_name, COUNT(*) AS num_trips
FROM Trips
GROUP BY traveler_name
ORDER BY num_trips DESC
LIMIT 1;

SELECT * FROM Destinations
WHERE destination_id NOT IN (SELECT DISTINCT destination_id FROM Trips);

SELECT trip_id, traveler_name,
       budget / (DATEDIFF(end_date, start_date) + 1) AS cost_per_day
FROM Trips
ORDER BY cost_per_day DESC
LIMIT 1;

UPDATE Trips
SET end_date = DATE_ADD(end_date, INTERVAL 3 DAY),
    budget = budget + (3 * (SELECT avg_cost_per_day FROM Destinations WHERE destination_id = Trips.destination_id))
WHERE trip_id = 3;

DELETE FROM Trips
WHERE end_date < '2023-01-01';






