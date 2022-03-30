USE titanic;
-- Excercise

-- 1. Passenger Wanita yang Survive 
SELECT COUNT(Survived) as total_survived, Sex 
FROM passengers 
WHERE Survived = 1 AND Sex = "female";

-- 2. Passenger Pria di Pclass 2 yang Tidak Selamat
SELECT *
FROM passengers 
WHERE Survived = 0 AND Sex = "male" AND Pclass = 2;

-- 3. Rata - rata Harga Tiket Pclass 1
SELECT AVG(Fare) AS avg_price, Pclass FROM passengers WHERE Pclass = 1;

-- 4. Passenger Wanita yang Survive, Berada di Pclass 2, dan Berumur 10 - 30 tahun
SELECT * 
FROM passengers
WHERE Survived = 1 AND Sex = "female" AND Pclass = 2 AND Age BETWEEN 10 AND 30;

-- 5. 10 Passenger dengan Harga Tiket Termahal
SELECT *
FROM passengers 
ORDER BY Fare DESC
LIMIT 10;

-- 6. 50 Passenger Wanita dengan Harga Tiket Termurah
SELECT *
FROM passengers
WHERE Sex = "female"
ORDER BY Fare
LIMIT 50;