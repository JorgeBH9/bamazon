-- Create a MySQL Database called bamazon.

CREATE database bamazon_db;
USE bamazon_db;

-- Then create a Table inside of that database called products.
-- The products table should have each of the following columns:

-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)

CREATE TABLE products (
  item_id integer(11) auto_increment not null,
  product_name varchar(50) not null,
  department_name varchar(30) not null,
  price decimal(10,2),
  stock_quantity integer(11),
  primary key (item_id)
);

-- Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "PlayStation", "Electronics", 500.20, 50),
	   (2, "Lipitor", "Pharmacy", 50.50, 150),
       (3, "Corolla", "Carseller", 40000.01, 20),
       (4, "Star Wars", "Electronics", 25.50, 70),
       (5, "iPad", "Electronics", 500.50, 30),
       (6, "Mario Bros.", "Franchise", 10000.36, 30),
       (7, "Michael Jackson CD Thriller", "Electronics", 20.50, 100),
       (8, "Harry Potter", "Books", 15.50, 120),
       (9, "iPhone", "Electronics", 300.50, 78),
       (10, "Rubiks Cube", "Toys", 10.50, 300);
       
select item_id, price, stock_quantity from products