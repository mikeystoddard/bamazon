-- step 1 creating the database, and dropping one if it already exists --
DROP DATABASE IF EXISTS bamazon.sql;
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- products table --
CREATE TABLE products (
    item_db INTEGER auto_increment NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL (10,3) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
);