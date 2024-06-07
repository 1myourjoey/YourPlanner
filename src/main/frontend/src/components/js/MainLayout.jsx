import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Weather from './Weather';
import DummyFooter from './DummyFooter';
import '../css/header.css';
import '../css/MainLayout.css';


const MainLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('/api/users/logout')
            .then(() => {
                sessionStorage.removeItem('loginId');
                setIsLoggedIn(false);
                navigate('/');
            })
            .catch(error => {
                console.error('로그아웃 실패:', error);
            });
    };

    useEffect(() => {
          // 로그인 상태를 확인하는 로직 추가 (예: 세션 스토리지 등을 통해 확인)
          const loggedIn = sessionStorage.getItem('loginId') !== null; // 예시: 세션 스토리지에 loginId가 있는지 확인
          setIsLoggedIn(loggedIn);
      }, []);
      return (
          <div className="App">
              <header className="container header">
                  <div className="row">
                      <h3 className="logo"></h3>
                      <div className="col auth-container">
                          <div className="auth-links">
                              {isLoggedIn ? (
                                  <>
                                      <Link to="/" onClick={handleLogout}>로그아웃</Link>
                                  </>
                              ) : (
                                  <>
                                      <Link to="/login">로그인</Link> <Link to="/signup">회원가입</Link>
                                  </>
                              )}
                              {isLoggedIn && <Link to="/mypage">마이페이지</Link>}
                          </div>
                      </div>
                  </div>
              </header>
              <section className="section1">

                  <section className="container">
                      <div className="col">
                          <h1>YOUR PLANNER</h1>
                          <h4>유플과 시작하는 여행 !</h4>
                      </div>
                      <div className="row">
                          <div className="col">
                              <Outlet/>
                          </div>
                      </div>
                      <Weather/>
                  </section>

              </section>

              <DummyFooter/>

          </div>

      );
};

export default MainLayout;
