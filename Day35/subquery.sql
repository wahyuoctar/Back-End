USE titanic;
-- PAGE 1
SELECT * FROM passengers LIMIT 10 OFFSET 0;

-- PAGE 2
SELECT * FROM passengers LIMIT 10 OFFSET 10;

SELECT COUNT(*) AS total_passengers FROM passengers;

SELECT SUM(Survived) AS total_survivor FROM passengers;

SELECT AVG(Age) AS average_age FROM passengers WHERE Survived = 1;

SELECT COUNT(*) AS total_passengers, Sex FROM passengers GROUP BY Sex;

SELECT ROUND(AVG(Age)) AS average_age, Survived, Sex 
FROM passengers 
GROUP BY Survived, Sex;

SELECT * FROM passengers WHERE Pclass IN (1,3);

SELECT * FROM passengers WHERE Name LIKE "%B%" OR "B%";

SELECT * FROM passengers WHERE NOT Name LIKE "%B%";

SELECT * FROM passengers;

-- Subquery  

SELECT * FROM passengers WHERE Fare < (SELECT AVG(Fare) FROM passengers);

SELECT * FROM passengers WHERE PassengerId IN (SELECT PassengerId FROM passengers WHERE Survived = 1);