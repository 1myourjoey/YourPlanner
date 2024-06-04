import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
            const response = await axios.post('/api/users/signUp', formData);
            console.log(response.data);
            // 회원가입 성공 시 필요한 동작 수행
            navigate('/'); // 회원가입 성공 시 메인 페이지로 이동
        } catch (error) {
            console.error('Error:', error);
            // 에러 처리
        }
    };

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="loginId">아이디:</label>
                    <input type="text" name="loginId" value={formData.loginId} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="pw">비밀번호:</label>
                    <input type="password" name="pw" value={formData.pw} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">이메일:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="tel">전화번호:</label>
                    <input type="text" name="tel" value={formData.tel} onChange={handleChange} />
                </div>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;
