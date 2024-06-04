// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import "../src/components/css/footer.css";
import TravelDate from "./components/js/TravelDate";
import TravelDetails from "./components/js/TravelDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/js/Login";
import SignUp from "./components/js/SignUp";
import MainLayout from './components/js/MainLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<TravelDate />} />
                </Route>
                <Route path="/details" element={<TravelDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
