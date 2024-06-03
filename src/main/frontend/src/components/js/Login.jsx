import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginId, setLoginId] = useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/users/login', {
                loginId: loginId,
                pw: pw
            });

            if (response.data) {
                console.log('로그인 성공:', response.data);
                navigate('/');
            } else {
              console.log(response.data.success)
                setError('아이디 또는 비밀번호가 올바르지 않습니다.');
                navigate('/login');
            }
        } catch (error) {
            // 예외 상황 처리 (예: 네트워크 오류)
            console.error('로그인 요청 실패:', error);
            setError('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        아이디:
                        <input
                            type="text"
                            id="loginId"
                            name="loginId"
                            value={loginId}
                            onChange={(e) => setLoginId(e.target.value)}
                        />
                    </label>


                </div>
                <div>
                    <label>비밀번호:</label>
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
        </div>
    );
};

export default Login;
