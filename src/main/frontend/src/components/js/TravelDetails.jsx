import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TrainCode from './TrainCode';
import LocationBasedList from './LocationBasedList';
import TrainList from './TrainList';
import DummyLocationBasedList from './DummyLocationBasedList';
import '../css/header.css';
import '../css/TravelDetails.css';
import Header from './Header';
import SelectedTrains from './SelectedTrains';


const TravelDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const startDate = params.get('startDate');
  const endDate = params.get('endDate');
  let departure = params.get('departure');
  let destination = params.get('destination');
  let destination2 = params.get('destination');

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

  const [selectedTrains, setSelectedTrains] = useState([]);
  const [selectedItems, setSelectedItems] = useState({
    attractions: [],
    hotels: [],
    restaurants: [],
  });

  const departureCodes = TrainCode[departure] || [];
  const destinationCodes = TrainCode[destination] || [];

  // destination 값을 rnum 값으로 변환
  if (regionMapping[destination2]) {
    destination2 = regionMapping[destination2];
  }

  return (
    <div className="travel-container">
      <Header />
      <div className="travel-details-card">
            <h2>Travel Details</h2>
            <div className="travel-info">
              <p><strong>Departure:</strong> {departure}</p>
              <p><strong>Destination:</strong> {destination}</p>
              <p><strong>Start Date:</strong> {startDate}</p>
              <p><strong>End Date:</strong> {endDate}</p>
            </div>
          </div>
          
      {departureCodes.length > 0 && destinationCodes.length > 0 && (
        <TrainList
          depPlaceId={departureCodes}
          arrPlaceId={destinationCodes}
          startDate={startDate}
          selectedTrains={selectedTrains}
          setSelectedTrains={setSelectedTrains}
        />
      )}
        <DummyLocationBasedList
          destination2={destination2}
          departure={departure}
          destination={destination}
          startDate={startDate}
          endDate={endDate}
          selectedTrains={selectedTrains}
          setSelectedTrains={setSelectedTrains}
      />
    </div>
  );
};

export default TravelDetails;