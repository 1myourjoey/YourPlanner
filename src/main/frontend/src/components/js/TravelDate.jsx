import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import MapSvg from "./MapSvg";
import '../css/TravelDate.css';
import Plane from "./Plane";

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
    const [departure, setDeparture] = useState('');
    const navigate = useNavigate();

    const handleTravel = () => {
        const formattedStartDate = startDate ? formatDate(startDate) : '';
        const formattedEndDate = endDate ? formatDate(endDate) : '';
        const params = new URLSearchParams({
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            departure,
            destination
        });
        navigate(`/details?${params.toString()}`);
    };

    const cities = [
        "서울", "부산", "대구", "인천", "광주", "대전", "울산",
        "세종", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도",
        "경상북도", "경상남도", "제주도"
    ];

    return (
        <div className="form">
            <Plane/>
            <div className="left-panel">
                <MapSvg onCityClick={setDestination}/>
            </div>
            <div className="right-panel">
                <div className="form-item">
                    <label htmlFor="startDate" className="label">Start Date:</label>
                    <DatePicker
                        id="startDate"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="input-field" // 클래스 추가
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="endDate" className="label">End Date:</label>
                    <DatePicker
                        id="endDate"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="input-field" // 클래스 추가
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="departure" className="label">Departure:</label>
                    <select
                        id="departure"
                        value={departure}
                        onChange={e => setDeparture(e.target.value)}
                        className="departure-input" // 클래스 추가
                    >
                        <option value="">도시를 선택하세요</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="destination" className="label">Destination:</label>
                    <input
                        type="text"
                        id="destination"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                        className="destination-input" // 클래스 추가
                    />
                </div>

                <button onClick={handleTravel} className="button">여행하기</button> {/* 클래스 추가 */}
            </div>

        </div>
    );
};

export default TravelDate;