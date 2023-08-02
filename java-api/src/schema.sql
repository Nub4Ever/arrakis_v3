DROP DATABASE IF EXISTS 'bonds';
CREATE DATABASE 'bonds';
use DATABASE 'bonds';

CREATE TABLE 'book'(
    'id' int NOT NULL AUTO_INCREMENT,
    'name' varchar(255) NOT NULL,
    PRIMARY KEY ('id')
);

CREATE TABLE 'user'(
    'id' int NOT NULL AUTO_INCREMENT,
    'name' varchar(255) NOT NULL,
    'email' varchar(255) NOT NULL,
    'role' varchar(255) NOT NULL,
    PRIMARY KEY ('id')
);

CREATE TABLE 'counterparty'(
    'id' int NOT NULL AUTO_INCREMENT,
    'name' varchar(255) NOT NULL,
    PRIMARY KEY ('id')
);

CREATE TABLE 'book_user'(
    'book_id' int NOT NULL ,
    'user_id' int NOT NULL ,

    PRIMARY KEY ('book_id','user_id'),
  

    KEY 'Foreign_Key_book_id' ('book_id'),
    KEY 'Foreign_Key_user_id' ('user_id'),

);

CREATE TABLE 'security'(
    'id' int NOT NULL AUTO_INCREMENT,
    'isin' varchar(50) DEFAULT NULL,
    'cusip' varchar(50) DEFAULT NULL,
    'issuer_name' varchar(255) NOT NULL,
    'maturity_date' datetime NOT NULL,
    'coupon' float NOT NULL,
    'type' varchar(255) DEFAULT NULL,
    'face_value' float NOT NULL,
    'currency' varchar(10) NOT NULL,
    'status' varchar(50) DEFAULT NULL,
    PRIMARY KEY ('id')
);

CREATE TABLE 'trades'(
    'id' int NOT NULL AUTO_INCREMENT,
    'book_id' int NOT NULL ,
    'security_id' int NOT NULL ,
    'quantity' int NOT NULL ,
    'unit_price' float NOT NULL ,
    'buy_sell' varchar(50) DEFAULT NULL,
    'counterparty_id' int NOT NULL ,
    'currency' varchar(10) NOT NULL,
    'status' varchar(50) DEFAULT NULL,
    'trade_date' datetime NOT NULL,
    'settlement_date' datetime NOT NULL,

    PRIMARY KEY ('id'),
    KEY 'Foreign_Key_book_id_2' ('book_id'),
    KEY 'Foreign_Key_security_id' ('security_id'),
    KEY 'Foreign_Key_counterparty_id' ('counterparty_id'),

);


