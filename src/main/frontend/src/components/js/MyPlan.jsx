import React, { useState, useEffect } from 'react';
import '../css/MyPlan.css';
import profile from '../img/profile.png';

function MyPlan() {
  const [loginId, setLoginId] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
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
    setEditing(false);
  };

  const getDisplayPassword = () => {
    if (pw.length === 0) {
      return pw;
    }
    return pw[0] + '*'.repeat(pw.length - 1);
  };

  const handleDelete = async () => {
    const userNo = sessionStorage.getItem('userNo');

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

  const toggleEditing = () => {
    setEditing(!editing);
  };

  return (
    <div className="mypage-container">
      <img className="profile-picture" src={profile} alt="Profile" />
      {editing ? (
        <form onSubmit={handleSubmit}>
          <table className="info-table">
            <tbody>
              <tr>
                <th>아이디</th>
                <td>
                  <input style={{ width:'100%' }}
                    type="text"
                    id="loginId"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input style={{ width:'100%' }}
                    type="text"
                    id="pw"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input style={{ width:'100%' }}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>
                  <input style={{ width:'100%' }}
                    type="tel"
                    id="tel"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-container">
            <button className="custom-button" type="submit">저장</button>
            <button className="custom-button" type="button" onClick={toggleEditing}>취소</button>
            <button className="custom-button" type="button" onClick={handleDelete}>삭제</button>
          </div>
        </form>
      ) : (
        <div>
            <p style={{textAlign:'center',fontSize:'20px'}}>{loginId}</p>
          <div className="button-container" style={{marginBottom:'80px'}}>
            <a className="updateMember" onClick={toggleEditing}>회원 정보 수정</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPlan;
