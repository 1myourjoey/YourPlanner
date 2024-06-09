INSERT INTO USERS (login_id, pw, email, tel) VALUES ('user', '1', 'user1@example.com', '123456789');
INSERT INTO users (login_id, pw, email, tel) VALUES ('user2', '2', 'user2@example.com', '987654321');

INSERT INTO Save (user_no, save_title, first_date, end_date, first_place, end_place, todo)
VALUES (1, 'Title', '2024-06-06T12:00:00', '2024-06-07T12:00:00', 'Place A', 'Place B', 'Do something');

INSERT INTO Save (user_no, save_title, first_date, end_date, first_place, end_place, todo)
VALUES (1, 'Title', '2024-06-06T12:00:00', '2024-06-07T12:00:00', '파주', '강원도', '아침식사');

INSERT INTO Save (user_no, save_title, first_date, end_date, first_place, end_place, todo)
VALUES (1, '강원도로 여행', '2024-06-06T12:00:00', '2024-06-07T12:00:00', '일산', '강원도', '할일');

INSERT INTO Save (user_no, save_title, first_date, end_date, first_place, end_place, todo)
VALUES (2, 'Title', '2024-06-06T12:00:00', '2024-06-07T12:00:00', '파주', '강원도', '아침식사');




-- Accommodation 테이블에 데이터 삽입
INSERT INTO Accommodation (acc_no, save_no, user_no, acc_name, acc_address, acc_img, acc_tel)
VALUES (1, 1, 1, 'Accommodation A', '123 Main St', 'http://example.com/accommodation_img.jpg', '010-5597-1898');

-- Restaurant 테이블에 데이터 삽입
INSERT INTO Restaurant (res_no, save_no, user_no, res_name, res_address, res_img, res_tel)
VALUES (1, 1, 1, 'Restaurant X', '456 Oak St', 'http://example.com/restaurant_img.jpg', '010-9915-7748');

-- Transportation 테이블에 데이터 삽입
INSERT INTO Transportation (trans_no, save_no, user_no, trans_name, first_place, end_place, time)
VALUES (1, 1, 1, 'Bus', 'City A', 'City B', '2024-06-07 12:00:00');

-- Tour 테이블에 데이터 삽입
INSERT INTO Tour (tour_no, save_no, user_no, tour_name, tour_address, tour_img)
VALUES (1, 1, 1, 'Tour Y', '789 Elm St', 'http://example.com/tour_img.jpg');
