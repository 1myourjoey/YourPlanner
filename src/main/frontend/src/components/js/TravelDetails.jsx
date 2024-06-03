import React from 'react';
import { useLocation } from 'react-router-dom';
import LocationBasedList from './LocationBasedList';

const TravelDetails = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');
    let departure = params.get('departure');
    let destination = params.get('destination');

    const regionMapping = {
        "서울": "1",
        "인천": "2",
        "대전": "3",
        "대구": "4",
        "광주": "5",
        "부산": "6",
        "울산": "7",
        "세종": "8",
        "경기도": "31",
        "강원도": "32",
        "충청북도": "33",
        "충청남도": "34",
        "경상북도": "35",
        "경상남도": "36",
        "전라북도": "37",
        "전라남도": "38",
        "제주도": "39"
    };


    // destination 값을 rnum 값으로 변환
    if (regionMapping[destination]) {
        destination = regionMapping[destination];
    }

    return (
        <div>
            <h2>Travel Details</h2>
            <p><strong>Departure:</strong> {departure}</p>
            <p><strong>Destination:</strong> {destination}</p>
            <p><strong>Start Date:</strong> {startDate}</p>
            <p><strong>End Date:</strong> {endDate}</p>
            <LocationBasedList destination={destination} />
        </div>
    );
};

export default TravelDetails;
