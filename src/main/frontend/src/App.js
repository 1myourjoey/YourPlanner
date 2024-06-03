import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import TravelDate from "./components/js/TravelDate";
import TravelDetails from "./components/js/TravelDetails";

import MapSvg from "./components/js/MapSvg";


import Login from "./components/js/Login";
import SignUp from "./components/js/SignUp";




function App() {
    return (
        <Router>
            <div className="App">
             <div className="auth-links">
                    <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
             </div>
                <h1>YOUR PLANNER</h1>
                <h4>유플과 시작하는 여행 !</h4>

                <Routes>
                    <Route path="/" element={<TravelDate />} />
                    <Route path="/details" element={<TravelDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>


            </div>
        </Router>
        

    );
}

export default App;
