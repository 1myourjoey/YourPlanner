import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MapSvg from "./MapSvg";

const TravelDate = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [destination, setDestination] = useState('');

    const handleTravel = () => {
        console.log(`Traveling to ${destination} from ${startDate} to ${endDate}`);
    };

    const handleSelectDestination = (cityName) => {
        setDestination(cityName);
    };

    return (
        <div className="form">
            <label htmlFor="startDate"> Start Date: </label>
            <DatePicker
                id="startDate"
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
            />
            <label htmlFor="endDate"> End Date: </label>
            <DatePicker
                id="endDate"
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat="yyyy-MM-dd"
            />
            <label htmlFor="destination"> Destination: </label>
            <input
                type="text"
                id="destination"
                value={destination}
                onChange={e => setDestination(e.target.value)}
            />
            <button onClick={handleTravel}>여행하기</button>
            <div className="map-container">
                <p>지도에서 지역을 선택해보세요 !</p>
                <MapSvg onCityClick={setDestination}/>
            </div>

        </div>
    );
};

export default TravelDate;
