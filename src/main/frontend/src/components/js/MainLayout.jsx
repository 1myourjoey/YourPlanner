import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Weather from './Weather';
import DummyFooter from './DummyFooter';
import '../css/header.css';
import '../css/MainLayout.css'
import Header from './Header';
import Chat from './Chat';



const MainLayout = () => {
      return (
        <div className="App">
            <Header/>
            <section className="section1">
            <Chat/>
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
                    
                    <div className='gap'></div>
                    
                </section>
                
            </section>
            
            <DummyFooter/>


        </div>
      );
};

export default MainLayout;