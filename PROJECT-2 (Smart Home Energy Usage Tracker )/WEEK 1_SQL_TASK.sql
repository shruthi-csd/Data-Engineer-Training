CREATE DATABASE smarthome;
USE smarthome;


CREATE TABLE rooms (
  room_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50)
);


CREATE TABLE devices (
  device_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  room_id INT,
  status VARCHAR(20),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);


CREATE TABLE energy_logs (
  log_id INT PRIMARY KEY AUTO_INCREMENT,
  device_id INT,
  timestamp DATETIME,
  energy_kwh DECIMAL(6,3),
  FOREIGN KEY (device_id) REFERENCES devices(device_id)
);

INSERT INTO rooms(name) VALUES 
('Study Room'), 
('Guest Room'), 
('Bathroom');


INSERT INTO devices (name, room_id, status) VALUES
('Smart Lamp', 1, 'active'),
('Air Purifier', 2, 'inactive'),
('Water Heater', 3, 'active');


INSERT INTO energy_logs (device_id, timestamp, energy_kwh) VALUES
(1, '2025-07-22 06:30:00', 0.550),
(2, '2025-07-22 07:15:00', 1.800),
(3, '2025-07-22 08:45:00', 2.250);


SELECT * FROM rooms;
SELECT * FROM devices;
SELECT * FROM energy_logs;


UPDATE devices 
SET status = 'active' 
WHERE device_id = 2;

DELETE FROM energy_logs 
WHERE log_id = 3;

SELECT r.name AS room, d.name AS device, e.timestamp, e.energy_kwh
FROM energy_logs e
JOIN devices d ON e.device_id = d.device_id
JOIN rooms r ON d.room_id = r.room_id;


DELIMITER $$

CREATE PROCEDURE getroomenergyperday()
BEGIN
  SELECT 
    r.name AS room_name, 
    DATE(e.timestamp) AS day,
    SUM(e.energy_kwh) AS total_energy_kwh
  FROM energy_logs e
  JOIN devices d ON e.device_id = d.device_id
  JOIN rooms r ON d.room_id = r.room_id
  GROUP BY r.name, DATE(e.timestamp);
END$$

DELIMITER ;


CALL getroomenergyperday();


SELECT 
  d.device_id, 
  d.name AS device_name, 
  r.name AS room_name, 
  d.status
FROM devices d
JOIN rooms r ON d.room_id = r.room_id;

SELECT 
  r.name AS room_name, 
  COUNT(d.device_id) AS num_devices
FROM rooms r
LEFT JOIN devices d ON r.room_id = d.room_id
GROUP BY r.name;
