import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import Chat from './Chat';
import axios from 'axios';

const MainLayout = () => (
    <div className="App">
        <header className="container">
            <div className="col">
                <h1>YOUR PLANNER</h1>
                <h4>유플과 시작하는 여행 !</h4>
            </div>
            <div className="row">
                <div className="col">
                    <div className="auth-links">
                        <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
                    </div>
                </div>
            </div>
        </header>
        <section className="container">
            <div className="row">
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </section>
                    <div>
                        <Chat />
                        </div>
        <Footer />
    </div>
);

export default MainLayout;
