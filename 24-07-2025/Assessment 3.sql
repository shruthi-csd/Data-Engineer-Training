create database PetClinic;
use PetClinic;

CREATE TABLE Pets (
pet_id INT PRIMARY KEY,
name VARCHAR(50),
type VARCHAR(20),
breed VARCHAR(50),
age INT,
owner_name VARCHAR(50)
);

CREATE TABLE Visits (
visit_id INT PRIMARY KEY,
pet_id INT,
visit_date DATE,
issue VARCHAR(100),
fee DECIMAL(8,2),
FOREIGN KEY (pet_id) REFERENCES Pets(pet_id)
);

INSERT INTO Pets VALUES
(1, 'Buddy', 'Dog', 'Golden Retriever', 5, 'Ayesha'),
(2, 'Mittens', 'Cat', 'Persian', 3, 'Rahul'),
(3, 'Rocky', 'Dog', 'Bulldog', 6, 'Sneha'),
(4, 'Whiskers', 'Cat', 'Siamese', 2, 'John'),
(5, 'Coco', 'Parrot', 'Macaw', 4, 'Divya'),
(6, 'Shadow', 'Dog', 'Labrador', 8, 'Karan');

INSERT INTO Visits VALUES
(101, 1, '2024-01-15', 'Regular Checkup', 500.00),
(102, 2, '2024-02-10', 'Fever', 750.00),
(103, 3, '2024-03-01', 'Vaccination', 1200.00),
(104, 4, '2024-03-10', 'Injury', 1800.00),
(105, 5, '2024-04-05', 'Beak trimming', 300.00),
(106, 6, '2024-05-20', 'Dental Cleaning', 950.00),
(107, 1, '2024-06-10', 'Ear Infection', 600.00);

SELECT * FROM Pets
WHERE type = 'Dog';

SELECT * FROM Visits
WHERE fee > 800;

SELECT p.name AS pet_name, p.type, v.issue
FROM Pets p
JOIN Visits v ON p.pet_id = v.pet_id;

SELECT p.name AS pet_name, COUNT(v.visit_id) AS total_visits
FROM Pets p
JOIN Visits v ON p.pet_id = v.pet_id
GROUP BY p.name;

SELECT SUM(fee) AS total_revenue
FROM Visits;

SELECT type, AVG(age) AS avg_age
FROM Pets
GROUP BY type;

SELECT * FROM Visits
WHERE MONTH(visit_date) = 3 AND YEAR(visit_date) = 2024;

SELECT p.name, COUNT(v.visit_id) AS visit_count
FROM Pets p
JOIN Visits v ON p.pet_id = v.pet_id
GROUP BY p.name
HAVING COUNT(v.visit_id) > 1;

SELECT p.name, v.fee
FROM Visits v
JOIN Pets p ON p.pet_id = v.pet_id
WHERE v.fee = (SELECT MAX(fee) FROM Visits);

SELECT * FROM Pets
WHERE pet_id NOT IN (SELECT DISTINCT pet_id FROM Visits);

UPDATE Visits
SET fee = 350.00
WHERE visit_id = 105;

DELETE FROM Visits
WHERE visit_date < '2024-02-01';
