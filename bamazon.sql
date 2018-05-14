DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY(item_id)
  
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (082391,"Playstation", "Electronics", 299.99, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (102565, "Cheerios", "Food", 3.99, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (010194, "Levis", "Clothing", 39.99, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (031403, "Spiderman", "Toys", 9.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (080889, "Thriller", "Music", 5.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (102156, "Movado", "Jewelry", 199.99, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (073190, "Trimmer", "Mens Beauty", 39.99, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (012186, "Harry Potter", "Books", 19.99, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (022387, "Drill Set", "Tools", 49.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (020687, "Towel", "Home", 2.99, 200);