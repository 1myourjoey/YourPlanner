import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import TravelDate from "./components/js/TravelDate";
import MapSvg from './components/js/MapSvg'
function App() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [destination, setDestination] = useState('');

    return (
        <div className="App">
            <h1>YOUR PLANNER</h1>
            <h4>유플과 시작하는 여행 !</h4>
            <h5> 테스트 업하기</h5>

            <div className="travel">

                <TravelDate/>
            </div>



        </div>
    );
}

export default App;
