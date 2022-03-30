SELECT * FROM products;
SELECT * FROM categories;
SELECT * FROM genres;
SELECT * FROM conn_genre_product;

-- Sebuah kolom menyimpan primary key table lain -> Foreign Key
-- Relationship 1 to Many (1:M)

SELECT * FROM products AS p
JOIN categories AS c ON c.id = p.category_id;

-- Many to Many (M:M) relationship
SELECT * FROM conn_genre_product as gp
JOIN genres AS g ON g.id = gp.genre_id
JOIN products AS p ON p.id = gp.product_id;

SELECT * FROM conn_genre_product as gp
JOIN genres AS g ON g.id = gp.genre_id
JOIN products AS p ON p.id = gp.product_id
WHERE p.id = 2;