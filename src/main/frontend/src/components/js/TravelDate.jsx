import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import MapSvg from "./MapSvg";

// 날짜를 'yyyy-MM-dd' 형식으로 변환하는 함수
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const TravelDate = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    const handleTravel = () => {
        const formattedStartDate = startDate ? formatDate(startDate) : '';
        const formattedEndDate = endDate ? formatDate(endDate) : '';
        const params = new URLSearchParams({
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            destination
        });
        navigate(`/details?${params.toString()}`);
    };

    return (
        <div className="form">
            <label htmlFor="startDate">Start Date:</label>
            <DatePicker
                id="startDate"
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
            />
            <label htmlFor="endDate">End Date:</label>
            <DatePicker
                id="endDate"
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat="yyyy-MM-dd"
            />
            <label htmlFor="destination">Destination:</label>
            <input
                type="text"
                id="destination"
                value={destination}
                onChange={e => setDestination(e.target.value)}
            />
            <button onClick={handleTravel}>여행하기</button>
            <div className="map-container">
                <p>지도에서 지역을 선택해보세요 !</p>
                <MapSvg onCityClick={setDestination} />
            </div>
        </div>
    );
};

export default TravelDate;
