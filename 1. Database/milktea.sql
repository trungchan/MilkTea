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
    price_M DOUBLE NOT NULL,
    price_L DOUBLE NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    image_url VARCHAR(255),
    create_date DATETIME DEFAULT NOW(),
	FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

DROP TABLE IF EXISTS `Account`;
CREATE TABLE `Account` (
    account_id INT UNSIGNED UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) UNIQUE,
    `password` VARCHAR(800) NOT NULL,
    create_date DATETIME DEFAULT NOW(),
    `role` ENUM ('ADMIN','USER') DEFAULT 'USER'
);

DROP TABLE IF EXISTS Orders;
CREATE TABLE Orders (
    order_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    account_id INT UNSIGNED NOT NULL,
    order_date DATETIME DEFAULT NOW(),
    product_id INT UNSIGNED NOT NULL,
    quantity INT UNSIGNED NOT NULL,
    size ENUM('M','L') NOT NULL,
    unit_price DOUBLE NOT NULL,
	`name` VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(15),
    address VARCHAR(400),
    order_status ENUM('PENDING', 'SHIPPED', 'DELIVERED') DEFAULT 'PENDING',
    type_pay ENUM('COD','BANKING') DEFAULT 'COD',
    bank_number INT UNSIGNED,
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
INSERT INTO Categories(category_name)
VALUES
(N'Set Trà Sữa Tự Nấu' ),
(N'Trà Sữa' ),
(N'Matcha' ),
(N'Socola' ),
(N'Sữa Tươi' ),
(N'Trà Hoa Quả' );

        
INSERT INTO Products (product_name , description, price_M, price_L, category_id, image_url)
VALUES 	('Set Trà Sữa Olong Đậm Vị 6-8 Ly', 'Mô tả đang cập nhật', 89000, 99000, 1, 'Image1'),
		('Trà Sữa Trân Châu Đường Đen', 'Mô tả đang cập nhật', 31000, 41000, 2, 'Image2'),
		('Mango Matcha Latte', 'Mô tả đang cập nhật', 34000, 44000, 3, 'Image3'),
		('Trà Sữa Socola Kem Trứng', 'Mô tả đang cập nhật', 36000, 46000,4 , 'Image4'),
		('Sữa Tươi Trân Châu Đường Đen Kem Cheese', 'Mô tả đang cập nhật', 38000, 48000, 5, 'Image5'),
        ('Trà Xoài Machiato', 'Mô tả đang cập nhật', 38000, 48000, 6, 'Image6');