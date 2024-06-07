
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyPlan() {
  const [loginId, setLoginId] = useState('');
    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    useEffect(() => {
      // 세션 스토리지에서 정보 가져오기
      const storedLoginId = sessionStorage.getItem('loginId');
      const storedPw = sessionStorage.getItem('pw');
      const storedEmail = sessionStorage.getItem('email');
      const storedTel = sessionStorage.getItem('tel');

      if (storedLoginId) setLoginId(storedLoginId);
      if (storedPw) setPw(storedPw);
      if (storedEmail) setEmail(storedEmail);
      if (storedTel) setTel(storedTel);
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('제출된 폼:', { loginId, pw, email, tel });
    };

    const getDisplayPassword = () => {
      if (pw.length === 0) {
        return pw;
      }
      return pw[0] + '*'.repeat(pw.length - 1);
    };

    const handleDelete = async () => {
      const userNo = sessionStorage.getItem('userNo');
      console.log('Retrieved userNo from sessionStorage:', userNo);

      if (!userNo) {
        console.error('사용자 번호가 없습니다.');
        return;
      }

      try {
        const response = await fetch(`/api/users/delete/${userNo}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('삭제된 사용자:', { userNo });
          sessionStorage.clear();
          window.location.href = '/';
        } else {
          console.error('삭제 실패');
        }
      } catch (error) {
        console.error('삭제 요청 중 오류 발생:', error);
      }
    };
  //   수정
  const handleUpdate = async () => {
      const userNo = sessionStorage.getItem('userNo');
      console.log('Retrieved userNo from sessionStorage:', userNo);

      if (!userNo) {
          console.error('사용자 번호가 없습니다.');
          return;
      }

      const updatedUser = {
          userNo,
          loginId,
          pw,
          email,
          tel
      };

      try {
          const response = await fetch('/api/users/update', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedUser)
          });

          if (response.ok) {
              console.log('사용자 정보가 업데이트되었습니다.');
              // 추가 작업 수행 가능
          } else {
              console.error('사용자 정보 업데이트 실패');
          }
      } catch (error) {
          console.error('사용자 정보 업데이트 요청 중 오류 발생:', error);
      }
  };

    return (
      <div className="mypage-container">
        <h2>회원 정보</h2>
        <Link to="/mypage">나의 페이지</Link>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="loginId">아이디:</label>
            <input
              type="text"
              id="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="pw">비밀번호:</label>
            <input
              type="text"
              id="pw"
              value={getDisplayPassword()}
              onChange={(e) => setPw(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">이메일:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="tel">전화번호:</label>
            <input
              type="tel"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={handleUpdate}>수정</button>
          <button type="button" onClick={handleDelete}>삭제</button>
        </form>
      </div>
    );
  }
export default MyPlan;
