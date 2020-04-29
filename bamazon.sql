-- step 1 creating the database, and dropping one if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- products table --
CREATE TABLE products (
    item_id INTEGER auto_increment NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL (10,3) NOT NULL,
    stock_quantity INT(10) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 

      ("Dog Toy", "Dog", 10, 100);
      ("Cat Toy", "Cat", 10, 500);
      ("Collars/Leashes", "Pet Accessories", 25, 100);
      ("Dog Shoes", "Dog", 30, 30);
      ("Cat Shoes", "Car", 30, 100);
      ("Pet Food", "Food", 15, 1000);
      ("Pet Treats", "Food", 5, 400);
      ("Pet Tags", "Pet Accessories", 15, 300);
      ("Kitty Litter", "Cats", 30, 230);
      ("Pee Pad", "Dog", 50, 150);
    -- add more products --

select * from products;