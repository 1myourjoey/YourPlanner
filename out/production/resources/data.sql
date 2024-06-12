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



/*
-- Accommodation 테이블에 데이터 삽입
INSERT INTO Accommodation (ACCNO, SAVENO, USERNO, ACCNAME, ACCADDRESS, ACCIMG)
VALUES (1, 1, 1, 'Accommodation A', '123 Main St', 'http://example.com/accommodation_img.jpg');

-- Restaurant 테이블에 데이터 삽입
INSERT INTO RESTAURANT (RESNO, SAVENO, USERNO, RESNAME, RESADDRESS, RESIMG)
VALUES (1, 1, 1, 'Restaurant X', '456 OAK ST', 'http://example.com/restaurant_img.jpg');

-- Transportation 테이블에 데이터 삽입
INSERT INTO TRANSPORTATION (TRANSNO, SAVENO, USERNO, TRANSNAME, FIRSTPLACE, ENDPLACE, FIRSTTIME, ENDTIME)
VALUES (1, 1, 1, 'Bus', 'CITY A', 'CITY B', 20240606182600, 20240606154000);

-- Tour 테이블에 데이터 삽입
INSERT INTO TOUR (TOURNO, SAVENO, USERNO, TOURNAME, TOURADDRESS, TOURIMG)
VALUES (1, 1, 1, 'Tour Y', '789 ELM ST', 'http://example.com/tour_img.jpg');*/