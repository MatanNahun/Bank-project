USE bank;


-- CREATE TABLE categories(
--     name VARCHAR(255) PRIMARY KEY
-- );


-- CREATE TABLE users(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     balance FLOAT
-- );


-- CREATE TABLE transactions(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255),
--     amount INT,
--     category VARCHAR(255),
--     vendor VARCHAR(255),
--     user_id INT,

--     FOREIGN KEY(user_id) REFERENCES users(id)
-- );



-- SELECT * FROM transactions

-- SELECT balance FROM users WHERE id = 1

-- UPDATE users SET balance = balance - (SELECT amount FROM transactions WHERE id = 30 ) WHERE id = 1 

-- SELECT amount FROM transactions WHERE id = 30     



-- UPDATE users SET balance = 0 WHERE id = 1