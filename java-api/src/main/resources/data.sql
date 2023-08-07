INSERT INTO security (coupon, currency, cusip, face_value, isin, issuer_name, maturity_date, status, type, book_name)
VALUES
    (4.37, 'USD', '', 1000, 'XS1988387210', 'BNPParibasIssu 4,37% Microsoft Corp (USD)', '2021-08-05', 'active', 'CORP', 'Trading_book_1'),
    (3.15, 'USD', '123456780', 900, 'USN0280EAR64', 'Airbus 3.15% USD', '2021-07-30', 'active', 'CORP', 'Trading_book_2'),
    (2, 'USD', '123456bh0', 900, 'A12356111', 'UBS Facebook (USD)', '2021-09-30', 'active', 'CORP', 'Trading_book_3'),
    (3.15, 'USD', 'AMZN 3.15 08/22/27 REGS', 900, 'USU02320AG12', 'Amazon', '2021-03-08', 'active', 'CORP', 'Trading_book_4'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460505', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460506', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460507', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460508', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460509', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460510', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460511', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460512', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460513', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460514', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460515', 'HM Treasury United Kingdom', '2021-09-08', 'active', 'GOVN', 'Trading_book_6'),
    (2.02, 'USD', '87973RAA8', 690, 'US87973RAA86', 'TEMASEK FINL I LTD GLOBAL MEDIUM TERM NTS BOOK ENTRY REG S', '2021-06-08', 'active', 'SOVN', 'Trading_book_4'),
    (1.123, 'USD', '87973RAA8', 340, 'IE00B29LNP31', 'First Norway Alpha Kl.IV', '2030-12-22', 'active', 'SOVN', 'Trading_book_4');

INSERT INTO book (name)
VALUES
    ('trading_book_1'),
    ('trading_book_2'),
    ('trading_book_3'),
    ('trading_book_4'),
    ('trading_book_5'),
    ('trading_book_6');

INSERT INTO counterparty (name)
VALUES
    ('AZ Holdings INC'),
    ('Acme Co'),
    ('Sovereign Investments'),
    ('Astra Trading Ltd'),
    ('Muncipal Gov Of Orange County'),
    ('Goldman Sachs'),
    ('UBS'),
    ('Barclays'),
    ('British Telecom'),
    ('Pension Holdings'),
    ('Zurich Pension fund 4');


INSERT INTO trades (buy_sell, currency, quantity, settlement_date, status, trade_date, unit_price, book_id, security_id, counterparty_id)
VALUES
    ('buy', 'USD', 50, '2021-08-04', 'open', '2021-05-13', 90, 1, 1, 1),
    ('sell', 'GBP', 40, '2021-08-04', 'open', '2021-02-04', 89.56, 1, 1, 1),
    ('buy', 'USD', 1000, '2021-08-23', 'open', '2021-05-13', 105.775, 2, 2, 2),
    ('sell', 'GBP', 900, '2021-09-10', 'open', '2021-02-04', 105.775, 2, 2, 2),
    ('buy', 'USD', 50, '2021-08-23', 'open', '2021-05-13', 90, 3, 3, 3),
    ('buy', 'USD', 1000, '2021-08-23', 'open', '2021-05-13', 105.775, 2, 2, 4),
    ('sell', 'USD', 50, '2021-08-23', 'open', '2021-05-13', 90, 2, 3, 3),
    ('buy', 'GBP', 60, '2021-09-27', 'open', '2021-02-04', 98.56, 4, 4, 5),
    ('buy', 'USD', 50, '2021-08-23', 'open', '2021-08-23', 98.56, 4, 4, 5),
    ('buy', 'GBP', 1100, '2021-09-27', 'open', '2021-09-27', 110.35, 6, 5, 6),
    ('sell', 'GBP', 900, '2021-09-28', 'open', '2021-09-28', 110.35, 6, 6, 6),
    ('buy', 'GBP', 2000, '2021-09-29', 'open', '2021-09-29', 110.35, 6, 7, 7),
    ('sell', 'GBP', 2000, '2021-09-30', 'open', '2021-09-30', 110.35, 6, 8, 7),
    ('buy', 'GBP', 1000, '2021-10-01', 'open', '2021-10-01', 110.35, 6, 9, 8),
    ('buy', 'GBP', 900, '2019-10-02', 'open', '2019-10-02', 110.35, 6, 10, 8),
    ('sell', 'GBP', 1900, '2019-10-03', 'open', '2019-10-03', 110.35, 6, 11, 8),
    ('buy', 'GBP', 600, '2018-10-04', 'open', '2018-10-04', 110.35, 6, 12, 9),
    ('buy', 'GBP', 600, '2019-10-05', 'open', '2019-10-05', 110.35, 6, 13, 10),
    ('buy', 'GBP', 700, '2021-06-06', 'open', '2021-06-06', 110.35, 6, 14, 10),
    ('sell', 'GBP', 1300, '2021-10-07', 'open', '2011-10-07', 110.35, 6, 15, 10),
    ('buy', 'USD', 60, '2021-09-27', 'open', '2012-04-02', 100.13, 4, 16, 11),
    ('buy', 'USD', 50, '2021-08-23', 'open', '2012-08-23', 100.13, 4, 16, 11),
    ('buy', 'USD', 75, '2021-09-27', 'open', '2013-04-02', 100.13, 4, 16, 11),
    ('buy', 'USD', 50, '2021-08-23', 'open', '2014-08-23', 100.13, 4, 16, 11),
    ('buy', 'USD', 300, '2021-09-27', 'open', '2016-04-02', 98.76, 4, 17, 11),
    ('buy', 'USD', 300, '2021-08-23', 'open', '2012-08-23', 98.76, 4, 17, 11),
    ('buy', 'USD', 300, '2021-09-27', 'open', '2013-04-02', 98.76, 4, 17, 11),
    ('sell', 'USD', 300, '2021-08-23', 'open', '2015-08-23', 98.76, 4, 17, 11);

INSERT INTO users(name, email, role)
VALUES
    ('Trader_1', 'trader_1@gmail.com', 'trader'),
    ('Trader_2', 'trader_2@gmail.com', 'trader'),
    ('Trader_3', 'trader_3@gmail.com', 'trader'),
    ('Trader_4', 'trader_4@gmail.com', 'trader'),
    ('Trader_5', 'trader_5@gmail.com', 'trader'),
    ('Trader_6', 'trader_6@gmail.com', 'trader'),
    ('Trader_7', 'trader_7@gmail.com', 'trader'),
    ('Trader_8', 'trader_8@gmail.com', 'trader');

INSERT INTO book(name)
VALUES
    ('Trading_book_1'),
    ('Trading_book_2'),
    ('Trading_book_3'),
    ('Trading_book_4'),
    ('Trading_book_5'),
    ('Trading_book_6');

INSERT INTO book_user(book_id, user_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (1, 7),
    (2, 7),
    (3, 7),
    (4, 8),
    (6, 8);