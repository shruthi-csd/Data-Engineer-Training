create database Exercise;
use Exercise;

CREATE TABLE Exercises (
  exercise_id INT PRIMARY KEY,
  exercise_name VARCHAR(50),
  category VARCHAR(20),
  calories_burn_per_min INT
);

CREATE TABLE WorkoutLog (
  log_id INT PRIMARY KEY,
  exercise_id INT,
  date DATE,
  duration_min INT,
  mood VARCHAR(20),
  FOREIGN KEY (exercise_id) REFERENCES Exercises(exercise_id)
);


INSERT INTO Exercises VALUES
(1, 'Running', 'Cardio', 10),
(2, 'Cycling', 'Cardio', 8),
(3, 'Weight Lifting', 'Strength', 6),
(4, 'Yoga', 'Flexibility', 4),
(5, 'Push-ups', 'Strength', 7);

INSERT INTO WorkoutLog VALUES
(1, 1, '2025-03-01', 30, 'Energized'),
(2, 1, '2025-03-05', 20, 'Tired'),
(3, 2, '2025-03-10', 25, 'Normal'),
(4, 2, '2025-03-15', 35, 'Energized'),
(5, 3, '2025-03-12', 45, 'Tired'),
(6, 3, '2025-03-22', 30, 'Normal'),
(7, 4, '2025-03-18', 40, 'Energized'),
(8, 4, '2025-03-20', 25, 'Normal'),
(9, 5, '2025-03-25', 20, 'Tired'),
(10, 5, '2025-03-27', 30, 'Normal');

select * from Exercises WHERE category = "Cardio";

select * from WorkoutLog WHERE month (DATE)=3 AND YEAR(DATE) = 2025;

SELECT log_id, duration_min * calories_burn_per_min AS total_calories
FROM WorkoutLog wl
JOIN Exercises e ON wl.exercise_id = e.exercise_id;

SELECT category, AVG(duration_min) AS avg_duration
FROM WorkoutLog wl
JOIN Exercises e ON wl.exercise_id = e.exercise_id
GROUP BY category;

SELECT e.exercise_name, wl.date, wl.duration_min, (wl.duration_min * e.calories_burn_per_min) AS calories_burned
FROM WorkoutLog wl
JOIN Exercises e ON wl.exercise_id = e.exercise_id;

SELECT wl.date, SUM(wl.duration_min * e.calories_burn_per_min) AS total_calories
FROM WorkoutLog wl
JOIN Exercises e ON wl.exercise_id = e.exercise_id
GROUP BY wl.date;

SELECT e.exercise_name, SUM(wl.duration_min * e.calories_burn_per_min) AS total_calories
FROM WorkoutLog wl
JOIN Exercises e ON wl.exercise_id = e.exercise_id
GROUP BY e.exercise_name
ORDER BY total_calories DESC
LIMIT 1;

SELECT * FROM Exercises
WHERE exercise_id NOT IN (SELECT DISTINCT exercise_id FROM WorkoutLog);

SELECT * FROM WorkoutLog
WHERE mood = 'Tired' AND duration_min > 30;

UPDATE WorkoutLog
SET mood = 'Normal'
WHERE log_id = 2; 

SET SQL_SAFE_UPDATES = 0;
UPDATE Exercises
SET calories_burn_per_min = 12
WHERE exercise_name = 'Running';
SET SQL_SAFE_UPDATES = 1;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM WorkoutLog
WHERE MONTH(date) = 2 AND YEAR(date) = 2024;
SET SQL_SAFE_UPDATES = 1;







