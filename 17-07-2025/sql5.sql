SELECT c.customer_name, COUNT(o.order_id) AS total_orders
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_name
HAVING total_orders > 1;

select c.customer_name,sum(o.order_amount) as total_spent
from customers c
join orders o
on c.customer_id = o.customer_id
group by c.customer_name; 

select c.customer_name
from customers c
left join orders o on c.customer_id = o.customer_id
where o.order_id is null;

select c.city,count(o.order_id) as order_count
from customers c
join orders o on c.customer_id = o.customer_id
group by c.city;
