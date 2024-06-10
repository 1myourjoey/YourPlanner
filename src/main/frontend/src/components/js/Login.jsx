import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import '../css/header.css';
import '../css/Login.css';
import DummyFooter from './DummyFooter';

const Login = ({ setIsLoggedIn }) => {
    const [loginId, setLoginId] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/users/login', null, { params: { loginId, pw } });

            if (response.data) {
                console.log('로그인 성공:', response.data);

                // 세션 스토리지에 사용자 정보 저장
                sessionStorage.setItem('loginId', response.data.loginId);
                sessionStorage.setItem('pw', response.data.pw);
                sessionStorage.setItem('email', response.data.email);
                sessionStorage.setItem('tel', response.data.tel);
                sessionStorage.setItem('userNo', response.data.userNo);
                setIsLoggedIn(true);
                navigate('/');
            } else {
                setError('아이디 또는 비밀번호가 올바르지 않습니다.');
                navigate('/login');
            }
        } catch (error) {
            console.error('로그인 요청 실패:', error);
            setError('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <Header />
            <div className="login-container">
                <h2>로그인</h2>
                {error && <div>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="loginId">아이디:</label>
                        <input
                            type="text"
                            id="loginId"
                            name="loginId"
                            value={loginId}
                            onChange={(e) => setLoginId(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="pw">비밀번호:</label>
                        <input
                            type="password"
                            id="pw"
                            name="pw"
                            value={pw}
                            onChange={(e) => setPw(e.target.value)}
                        />
                    </div>
                    <button type="submit">로그인</button>
                </form>
                <Link to="/signup" className="signup-link">회원가입</Link>
                <Link to="/" className="home-link">홈으로 가기</Link>
            </div>
           <DummyFooter />
        </div>
    );
};

export default Login;
