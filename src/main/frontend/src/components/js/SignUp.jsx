import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../css/SignUp.css';
import Header from './Header';
import '../css/header.css';
import '../css/Login.css';
import DummyFooter from './DummyFooter';

const SignUp = () => {
    const [formData, setFormData] = useState({
        loginId: '',
        pw: '',
        email: '',
        tel: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/signUp', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            navigate('/'); // 회원가입 성공 시 메인 페이지로 이동
        } catch (error) {
            console.error('Error:', error);
            // 에러 처리
        }
    };

    return (
    <div>
       <Header />
        <div className="signup-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="loginId">아이디:</label>
                    <input type="text" id="loginId" name="loginId" value={formData.loginId} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="pw">비밀번호:</label>
                    <input type="password" id="pw" name="pw" value={formData.pw} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="예시) example@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="tel">전화번호:</label>
                    <input
                        type="text"
                        id="tel"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        placeholder="예시) 010-0000-0000"
                    />
                </div>
                <button type="submit">회원가입</button>
            </form>
            <Link to="/login" className="login-link">로그인</Link>
            <Link to="/" className="home-link">홈으로 가기</Link>
        </div>
      <DummyFooter />
    </div>
    );
};

export default SignUp;