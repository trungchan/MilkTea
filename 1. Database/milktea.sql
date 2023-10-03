/*============================== CREATE DATABASE =======================================*/
/*======================================================================================*/
DROP DATABASE IF EXISTS milk_tea_oder;
CREATE DATABASE milk_tea_oder;
USE milk_tea_oder;


DROP TABLE IF EXISTS Categories;
CREATE TABLE Categories(
    category_id INT UNSIGNED UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS Products;
CREATE TABLE Products (
    product_id INT UNSIGNED UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    price DOUBLE NOT NULL,
    category_id INT UNSIGNED,
    image_url VARCHAR(255),
	FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

DROP TABLE IF EXISTS `Account`;
CREATE TABLE `Account` (
    account_id INT UNSIGNED UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    address VARCHAR(400),
    create_date DATETIME DEFAULT NOW(),
    `role` ENUM ('ADMIN','USER') DEFAULT 'USER'
);

DROP TABLE IF EXISTS Orders;
CREATE TABLE Orders (
    order_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    account_id INT UNSIGNED,
    order_date DATETIME DEFAULT NOW(),
    product_id INT UNSIGNED,
    quantity INT UNSIGNED NOT NULL,
    unit_price DOUBLE NOT NULL,
	`name` VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(15),
    address VARCHAR(400),
    order_status ENUM('PENDING', 'SHIPPED', 'DELIVERED') DEFAULT 'PENDING',
    type_pay ENUM('COD','BANKING') DEFAULT 'COD',
    FOREIGN KEY (account_id) REFERENCES `Account`(account_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE ProductReviews (
    review_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id INT UNSIGNED,
    account_id INT UNSIGNED,
    rating INT UNSIGNED NOT NULL,
    review_text VARCHAR(800),
    review_date DATETIME DEFAULT NOW(),
    FOREIGN KEY (account_id) REFERENCES `Account`(account_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
DROP TABLE IF EXISTS Token;
CREATE TABLE Token(
	id INT AUTO_INCREMENT PRIMARY KEY,
	token VARCHAR(800) NOT NULL
);