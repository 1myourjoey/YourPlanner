import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Weather from './Weather';
import DummyFooter from './DummyFooter';
import '../css/header.css';
import Header from './Header';


const MainLayout = () => {
      return (
        <div className="App">
            <Header/>
                <div className="col">
                    <h1>YOUR PLANNER</h1>
                    <h4>유플과 시작하는 여행 !</h4>
                </div>
            <section className="container">
                <div className="row">
                    <div className="col">
                        <Outlet />
                    </div>
                </div>
            </section>
            <Weather />
            <DummyFooter />            

        </div>
    );
};

export default MainLayout;
