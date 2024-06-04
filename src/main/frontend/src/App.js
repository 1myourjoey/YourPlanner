import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import TravelDate from "./components/js/TravelDate";
import TravelDetails from "./components/js/TravelDetails";
import RestaurantBoard from "./components/js/RestaurantBoard";

function App() {
    return (
        <Router>
            <div className="App">
                <h1>YOUR PLANNER</h1>
                <h4>유플과 시작하는 여행 !</h4>

                <Routes>
                    <Route path="/" element={<TravelDate />} />
                    <Route path="/details" element={<TravelDetails />} />
                    <Route path="/restaurant" element={<RestaurantBoard />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
