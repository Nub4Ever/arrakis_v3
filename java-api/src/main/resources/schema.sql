DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS counterparty;
DROP TABLE IF EXISTS security;
DROP TABLE IF EXISTS trades;
DROP TABLE IF EXISTS book_user;

CREATE TABLE book(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    role varchar(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE counterparty(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE book_user(
    book_id int NOT NULL ,
    user_id int NOT NULL ,

    PRIMARY KEY (book_id,user_id),

    FOREIGN KEY(book_id) REFERENCES book (id),
    FOREIGN KEY(user_id) REFERENCES users (id)
);

CREATE TABLE security(
    id int NOT NULL AUTO_INCREMENT,
    isin varchar(50) DEFAULT NULL,
    cusip varchar(50) DEFAULT NULL,
    issuer_name varchar(255) NOT NULL,
    maturity_date date NOT NULL,
    coupon float NOT NULL,
    type varchar(255) DEFAULT NULL,
    face_value float NOT NULL,
    currency varchar(10) NOT NULL,
    status varchar(50) DEFAULT NULL,
    book_name varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE trades(
    id int NOT NULL AUTO_INCREMENT,
    book_id int NOT NULL ,
    security_id int NOT NULL ,
    quantity int NOT NULL ,
    unit_price float NOT NULL ,
    buy_sell varchar(50) DEFAULT NULL,
    counterparty_id int NOT NULL ,
    currency varchar(10) NOT NULL,
    status varchar(50) DEFAULT NULL,
    trade_date date NOT NULL,
    settlement_date date NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY(book_id) REFERENCES book(id),
    FOREIGN KEY(security_id) REFERENCES security(id),
    FOREIGN KEY(counterparty_id) REFERENCES counterparty(id)
);