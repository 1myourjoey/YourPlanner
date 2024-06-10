import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import "./components/css/Weather.css";
import TravelDate from "./components/js/TravelDate";
import TravelDetails from "./components/js/TravelDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/js/Login";
import SignUp from "./components/js/SignUp";
import MyPage from "./components/js/MyPage";
import MyPlan from "./components/js/MyPlan";
import MyPlanDetail from "./components/js/MyPlanDetail";
import MainLayout from './components/js/MainLayout';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<TravelDate />} />
                </Route>
                <Route path="/details" element={<TravelDetails />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/myplan" element={<MyPlan />} />
                <Route path="/myplanDetail" element={<MyPlanDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
