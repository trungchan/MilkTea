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
    FOREIGN KEY (account_id) REFERENCES `Account`(account_id)
);

DROP TABLE IF EXISTS Payments;
CREATE TABLE Payments (
    payment_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id INT UNSIGNED NOT NULL,
    payment_date DATETIME DEFAULT NOW(),
    total_payment DOUBLE NOT NULL,
	`name` VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(15),
    address VARCHAR(400),
    type_pay ENUM('COD','BANKING') DEFAULT 'COD',
    bank_number VARCHAR(20),
    FOREIGN KEY (order_id) REFERENCES `Orders`(order_id)
);

DROP TABLE IF EXISTS OrderDetails;
CREATE TABLE OrderDetails (
    order_details_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id INT UNSIGNED NOT NULL,
    product_id INT UNSIGNED NOT NULL,
    quantity INT UNSIGNED NOT NULL,
    size ENUM('M','L') NOT NULL,
    unit_price DOUBLE NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Products(product_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
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
VALUES 	('Set trà sữa trân châu đường đen đậm vị 6-8 Ly', 'Mô tả đang cập nhật', 89000, 99000, 1, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/set-tra-sua-tran-chau-duong-den-1.png?v=1696474328173'),
		('Set trà sữa nướng 6-8 Ly', 'Mô tả đang cập nhật', 99000, 109000, 1, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/set-tra-sua-nuong-1.png?v=1696474387720'),
        ('Set trà sữa ô long đậm vị 6-8 Ly', 'Mô tả đang cập nhật', 89000, 999000, 1, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/set-tra-sua-olong-1.png?v=1696474416757'),
        ('Set hồng trà sữa Winggo 6-8 Ly', 'Mô tả đang cập nhật', 85000, 95000, 1, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/set-tra-sua-olong-1.png?v=1696474416757'),
		('Trà sữa Winggo (Hồng Trà Sữa)', 'Mô tả đang cập nhật', 26000, 35000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/b726699b-a4d3-4071-a2e1-844a4078-308be508-220727125641-jpeg.jpg?v=1686797365623'),
        ('Trà Sữa Trân Châu Đường Đen', 'Mô tả đang cập nhật', 31000, 37000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/eeabda8e-697e-4f0a-93dd-5278ae62-e751accf-230125221311-jpeg.jpg?v=1686797476637'),
        ('Trà Sữa Trân Châu Đường Đen Kem Trứng', 'Mô tả đang cập nhật', 39000, 45000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/e7eb0406-7262-46c5-b50f-909b0148-1e7428a2-220727125600-jpeg.jpg?v=1686797695000'),
        ('Trà Sữa Kem Cheese', 'Mô tả đang cập nhật', 35000, 39000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/6c7c7e62-bd90-4c1c-9573-aca47ea2-6fdc6223-220727130644-jpeg.jpg?v=1686797755423'),
        ('Trà Sữa Hoa Đậu Biếc', 'Mô tả đang cập nhật', 29000, 35000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/4-6d1315a3-51d7-44ad-bc8b-122d34127afe.jpg?v=1686653845910'),
        ('Trà Sữa Kem Trứng Dừa Nướng', 'Mô tả đang cập nhật', 39000, 45000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-sua-kem-trung-dua-nuong.jpg?v=1677202968200'),
        ('Trà Sữa Oreo Kem Cheese', 'Mô tả đang cập nhật', 35000, 44000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-sua-oreo-kem-cheese.jpg?v=1677203522327'),
        ('Trà Sữa Hokaido', 'Mô tả đang cập nhật', 33000, 39000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-sua-hokaido.jpg?v=1677203703277'),
        ('Trà Sữa Việt Quất', 'Mô tả đang cập nhật', 31000, 37000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-sua-viet-quat.jpg?v=1677203827877'),
        ('Trà Sữa Bạc Hà', 'Mô tả đang cập nhật', 31000, 37000, 2, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-sua-dua-luoi-de-vuong.jpg?v=1677204212423'),
		('Việt Quất Matcha Latte', 'Mô tả đang cập nhật', 34000, 40000, 3, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/viet-quat-matcha-latte.jpg?v=1677205650307'),
        ('Mango Matcha Latte', 'Mô tả đang cập nhật', 34000, 44000, 3, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/mango-matcha-latte.jpg?v=1677205446463'),
		('Trà Sữa Socola Kem Trứng', 'Mô tả đang cập nhật', 36000, 46000, 4 , 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/3.jpg?v=1686653398447'),
        ('Trà Sữa Socola Kem Cheese', 'Mô tả đang cập nhật', 35000, 41000, 4 , 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-sua-socola-kem-cheese.jpg?v=1677206207983'),
        ('Trà Sữa Socola', 'Mô tả đang cập nhật', 28000, 34000, 4 , 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-sua-socola.jpg?v=1677206136157'),
		('Sữa Tươi Trân Châu Đường Đen Kem Cheese', 'Mô tả đang cập nhật', 38000, 48000, 5, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/sua-tuoi-tran-chau-duong-den-kem-cheese-min.jpg?v=1677293227470'),
        ('Sữa Tươi Trân Châu Đường Đen Hoa Đậu Biếc', 'Mô tả đang cập nhật', 33000, 39000, 5, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/4.jpg?v=1686653215167'),
        ('Sữa Tươi Trân Châu Đường Đen Kem Trứng', 'Mô tả đang cập nhật', 39000, 45000, 5, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/sua-tuoi-tran-chau-duong-den-kem-trung-min.jpg?v=1677292755567'),
        ('Trà Xoài Machiato', 'Mô tả đang cập nhật', 38000, 48000, 6, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-xoai-machiato-min.jpg?v=1677296304670'),
        ('Trà Hoa Quả Nhiệt Đới', 'Mô tả đang cập nhật', 38000, 48000, 6, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-hoa-qua-nhiet-doi-min.jpg?v=1677294462660'),
        ('Trà Đào', 'Mô tả đang cập nhật', 28000, 34000, 6, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-dao-min.jpg?v=1677293794333'),
        ('Trà Cam Đào Dâu Tây', 'Mô tả đang cập nhật', 38000, 48000, 6, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/1.jpg?v=1686652805533'),
        ('Hồng Trà Vải', 'Mô tả đang cập nhật', 25000, 35000, 6, 'https://bizweb.dktcdn.net/thumb/large/100/477/681/products/tra-vai-min.jpg?v=1677293929867');
        
INSERT INTO `Account` 		(email, user_name, phone_number, `password`, `role`) 
VALUES 					    ('username1' ,'account11@gmail.com', '098974573'  , '123456' , 'ADMIN' ),
							('username2' ,'account12@gmail.com', '0989745731' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN' ),
							('username3' , 'account13@gmail.com','0989745732' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN' ),
							('username4' ,'account14@gmail.com', '0989745733' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN'),
							('username5' ,'account15@gmail.com', '0989745734' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN'),
							('username6' ,'account16@gmail.com', '0989745735' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN'),
							('username7' ,'account17@gmail.com', '0989745736' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'USER'),
							('username8' ,'account18@gmail.com', '0989745737' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' , 'USER'),
							('username9' ,'account19@gmail.com', '0989745738' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' , 'USER'),
							('username10' ,'account111@gmail.com','0989745739', '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' , 'USER');        


INSERT INTO Orders (account_id)
VALUES 		(1),
			(2),
            (3),
            (4),
            (5),
            (6),
            (7),
            (8),
            (9);
            
INSERT INTO Payments    (order_id , total_payment, `name`, phone_number, address, type_pay, bank_number )
VALUES 					(1, 700000, null, null, null, 'BANKING', '15434343434' ),
						(2, 100000, 'Trung', '09333131213', '68 Cầu Giấy Hà Nội', 'COD', null ),
                        (3, 59000, null, null, null,  'BANKING', '1232131311' ),
                        (4, 30000, null, null, null,  'BANKING', '123232323' ),
                        (5, 250000, null, null, null,  'BANKING', '11232354334' ),
                        (6, 125000, null, null, null,  'BANKING', '15434343434' ),
                        (7, 155000, null, null, null,  'BANKING', '15434343434' ),
                        (8, 170000, null, null, null,  'BANKING', '15434343434' ),
                        (9, 120000, null, null, null,  'BANKING', '15434343434' );
                        
INSERT INTO OrderDetails    (order_id , product_id, quantity, size, unit_price)
VALUES 					(1, 1, 2, 'M', 60000),
						(1, 3, 1, 'M', 40000),
                        (3, 2, 2, 'L', 50000),
                        (3, 1, 1, 'M', 38000),
                        (2, 3, 2, 'L', 70000),
                        (5, 5, 3, 'M', 105000),
                        (5, 1, 2, 'L', 78000),
                        (4, 2, 2, 'M', 68000),
                        (6, 3, 1, 'L', 44000);
                        
INSERT INTO ProductReviews    (product_id , account_id, rating, review_text)
VALUES 					(1, 1, 4, 'Đồ uống ngon, giá tiền rẻ'),
						(2, 1, 4, 'Đồ uống ngon, giá tiền rẻ'),
                        (3, 2, 4, 'Đồ uống ngon, giá tiền rẻ'),
                        (4, 3, 5, 'Đồ uống ngon, giá tiền rẻ'),
                        (5, 3, 5, 'Đồ uống ngon, giá tiền rẻ'),
                        (6, 5, 3, 'Đồ uống ngon, giá tiền rẻ'),
                        (7, 4, 2, 'Đồ uống ko ngon, giá tiền đắt'),
                        (8, 6, 5, 'Đồ uống ngon, giá tiền rẻ'),
                        (9, 7, 4, 'Đồ uống ngon, giá tiền rẻ');
                        

            
