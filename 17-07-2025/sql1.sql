
-- create
CREATE TABLE products (
  product_id int primary key,
  product_name varchar(100),
  category varchar(100),
  price decimal,
  stock_quantity int,
  added_date date
);

-- insert
INSERT INTO products VALUES
 (1, 'headphones','gadgets',300,40,'2025-09-08'),
 (2, 'mouse', 'laptop', 500,29,'2025-09-06'),
 (3, 'laptop', 'electronics',12300,30,'2025-09-05'),
 (4, 'airdopes', 'boat',1230,60,'2025-08-05'),
 (5, 'battery', 'boat',1250,33,'2025-03-05');

-- fetch 
SELECT * FROM products;

