USE jc2002_basics; 

SELECT product_name, price, id FROM products;

SELECT * FROM products;

-- SELECT columns FROM table_name

INSERT INTO products VALUES (0, "Leci", 7000, "Buah", 15);

-- INSERT INTO table_name VALUES (value, sesuai, urutan, kolom) 

-- Extended insert query 
INSERT INTO products (price, product_name, stock, category)
values (15000, "Semangka", 7, "Buah");

-- INSERT INTO table_name (column1, column2, ...) VALUES
-- (value1, value2, ...); 

DELETE FROM products WHERE id = 10;

-- DELETE FROM table_name WHERE id = id

UPDATE products SET product_name = "Jeruk Bali", price = 7000
WHERE id = 9; 

-- UPDATE table_name SET column1= value1, column2 = value2 ...
-- WHERE id = id

SELECT * FROM products WHERE price = 7000;

SELECT * FROM products WHERE category = "Buah" AND stock >= 10;

SELECT * FROM products LIMIT 2;

SELECT * FROM products LIMIT 2 OFFSET 1;

SELECT * FROM products ORDER BY price;

SELECT * FROM products ORDER BY price DESC;

USE titanic;