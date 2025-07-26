CREATE DATABASE expense_tracker;
USE expense_tracker;


CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);


CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) UNIQUE
);


CREATE TABLE expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    category_id INT,
    amount DECIMAL(10,2),
    expense_date DATE,
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);


INSERT INTO users (name, email) VALUES 
('Karthik', 'karthik2025@mail.com'),
('Sneha', 'sneha.raju@email.com'),
('Vikram', 'vikram_nair@domain.com'),
('Pooja', 'pooja.star95@example.com'),
('Tejas', 'tejas.mani@gmail.com');

INSERT INTO categories (category_name) VALUES 
('Healthcare'),
('Education'),
('Rent'),
('Entertainment'),
('Travel');


INSERT INTO expenses (user_id, category_id, amount, expense_date, description) VALUES
(1, 1, 950.00, '2025-07-02', 'Doctor consultation and medicines'),
(1, 2, 2000.00, '2025-07-04', 'Online course fee'),
(2, 3, 7000.00, '2025-07-06', 'July month rent'),
(3, 4, 450.00, '2025-07-09', 'Movie tickets'),
(4, 5, 3000.00, '2025-07-11', 'Weekend trip'),
(5, 1, 600.00, '2025-07-12', 'Pharmacy purchase'),
(2, 5, 1250.00, '2025-07-13', 'Cab and hotel for client visit'),
(3, 2, 1800.00, '2025-07-16', 'Textbooks and materials'),
(4, 3, 7200.00, '2025-07-19', 'Shared apartment rent'),
(5, 4, 520.00, '2025-07-21', 'Stand-up comedy show');


SELECT * FROM users;
SELECT * FROM categories;
SELECT * FROM expenses;


INSERT INTO expenses (user_id, category_id, amount, expense_date, description)
VALUES (1, 3, 800.00, '2025-07-25', 'Partial rent payment');


UPDATE expenses
SET amount = 850.00, description = 'Updated partial rent'
WHERE expense_id = 11;


DELETE FROM expenses
WHERE expense_id = 11;

DELIMITER $$

CREATE PROCEDURE getmonthlytotal(IN uid INT, IN monthYear VARCHAR(7))
BEGIN
    SELECT 
        c.category_name,
        SUM(e.amount) AS total_amount
    FROM 
        expenses e
    JOIN 
        categories c ON e.category_id = c.category_id
    WHERE 
        e.user_id = uid
        AND DATE_FORMAT(e.expense_date, '%Y-%m') = monthYear
    GROUP BY 
        c.category_name;
END$$

DELIMITER ;

CALL getmonthlytotal(1, '2025-07');
