INSERT INTO security (coupon, currency, cusip, face_value, isin, issuer_name, maturity_date, status, type)
VALUES
    (4.37, 'USD', '', 1000, 'XS1988387210', 'BNPParibasIssu 4,37% Microsoft Corp (USD)', '2021-08-05 00:00:00', 'active', 'CORP'),
    (3.15, 'USD', '123456780', 900, 'USN0280EAR64', 'Airbus 3.15% USD', '2021-07-30 00:00:00', 'active', 'CORP'),
    (2, 'USD', '123456bh0', 900, 'A12356111', 'UBS Facebook (USD)', '2021-09-30 00:00:00', 'active', 'CORP'),
    (3.15, 'USD', 'AMZN 3.15 08/22/27 REGS', 900, 'USU02320AG12', 'Amazon', '2021-03-08 00:00:00', 'active', 'CORP'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460505', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460506', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460507', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460508', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460509', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460510', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460511', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460512', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460513', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460514', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (0.75, 'GBP', 'BDCHBW8', 900, 'GB00B6460515', 'HM Treasury United Kingdom', '2021-09-08 00:00:00', 'active', 'GOVN'),
    (2.02, 'USD', '87973RAA8', 690, 'US87973RAA86', 'TEMASEK FINL I LTD GLOBAL MEDIUM TERM NTS BOOK ENTRY REG S', '2021-06-08 00:00:00', 'active', 'SOVN'),
    (1.123, 'USD', '87973RAA8', 340, 'IE00B29LNP31', 'First Norway Alpha Kl.IV', '2030-12-22 00:00:00', 'active', 'SOVN');

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


--INSERT INTO trades (buy_sell, currency, quantity, settlement_date, status, trade_date, unit_price, book_id, security_id, counter_party_id)
--VALUES
--    ('buy', 'USD', 50, '2021-08-04 00:00:00', 'open', '2021-05-13 00:00:00', 90, 1, 1, 1),
--    ('sell', 'GBP', 40, '2021-08-04 00:00:00', 'open', '2021-02-04 00:00:00', 89.56, 1, 1, 1),
--    ('buy', 'USD', 1000, '2021-08-23 00:00:00', 'open', '2021-05-13 00:00:00', 105.775, 2, 2, 2),
--    ('sell', 'GBP', 900, '2021-09-10 00:00:00', 'open', '2021-02-04 00:00:00', 105.775, 2, 2, 2),
--    ('buy', 'USD', 50, '2021-08-23 00:00:00', 'open', '2021-05-13 00:00:00', 90, 3, 3, ),
--    ('buy', 'USD', 1000, '2021-08-23 00:00:00', 'open', '2021-05-13 00:00:00', 105.775),
--    ('sell', 'USD', 50, '2021-08-23 00:00:00', 'open', '2021-05-13 00:00:00', 90),
--    ('buy', 'GBP', 60, '2021-09-27 00:00:00', 'open', '2021-02-04 00:00:00', 98.56),
--    ('buy', 'USD', 50, '2021-08-23 00:00:00', 'open', '2021-08-23 00:00:00', 98.56),
--    ('buy', 'GBP', 1100, '2021-09-27 00:00:00', 'open', '2021-09-27 00:00:00', 110.35),
--    ('sell', 'GBP', 900, '2021-09-28 00:00:00', 'open', '2021-09-28 00:00:00', 110.35),
--    ('buy', 'GBP', 2000, '2021-09-29 00:00:00', 'open', '2021-09-29 00:00:00', 110.35),
--    ('sell', 'GBP', 2000, '2021-09-30 00:00:00', 'open', '2021-09-30 00:00:00', 110.35),
--    ('buy', 'GBP', 1000, '2021-10-01 00:00:00', 'open', '2021-10-01 00:00:00', 110.35),
--    ('buy', 'GBP', 900, '2019-10-02 00:00:00', 'open', '2019-10-02 00:00:00', 110.35),
--    ('sell', 'GBP', 1900, '2019-10-03 00:00:00', 'open', '2019-10-03 00:00:00', 110.35),
--    ('buy', 'GBP', 600, '2018-10-04 00:00:00', 'open', '2018-10-04 00:00:00', 110.35),
--    ('buy', 'GBP', 600, '2019-10-05 00:00:00', 'open', '2019-10-05 00:00:00', 110.35),
--    ('buy', 'GBP', 700, '2021-06-06 00:00:00', 'open', '2021-06-06 00:00:00', 110.35),
--    ('sell', 'GBP', 1300, '2021-10-07 00:00:00', 'open', '2011-10-07 00:00:00', 110.35),
--    ('buy', 'USD', 60, '2021-09-27 00:00:00', 'open', '2012-04-02 00:00:00', 100.13),
--    ('buy', 'USD', 50, '2021-08-23 00:00:00', 'open', '2012-08-23 00:00:00', 100.13),
--    ('buy', 'USD', 75, '2021-09-27 00:00:00', 'open', '2013-04-02 00:00:00', 100.13),
--    ('buy', 'USD', 50, '2021-08-23 00:00:00', 'open', '2014-08-23 00:00:00', 100.13),
--    ('buy', 'USD', 300, '2021-09-27 00:00:00', 'open', '2016-04-02 00:00:00', 98.76),
--    ('buy', 'USD', 300, '2021-08-23 00:00:00', 'open', '2012-08-23 00:00:00', 98.76),
--    ('buy', 'USD', 300, '2021-09-27 00:00:00', 'open', '2013-04-02 00:00:00', 98.76),
--    ('sell', 'USD', 300, '2021-08-23 00:00:00', 'open', '2015-08-23 00:00:00', 98.76);
--
