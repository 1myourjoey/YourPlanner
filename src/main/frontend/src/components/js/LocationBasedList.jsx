import React, { useState, useEffect } from 'react';

import ListComponent from './ListComponent';
import ListHotel from './ListHotel';

const LocationBasedList = ({ destination }) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(destination);
  const [view, setView] = useState('attractions'); // 'attractions' or 'hotels'
  const OPEN_KEY = "5uJ1mFn4tOfEwReTW3dupjd4w2n5kEHO5nciT%2BDVGAVWTl90sysBKbMTIlIxLW5lCPo1VmpZ%2FXggxU84GhG81g%3D%3D";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${OPEN_KEY}&numOfRows=17&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        setLocations(json.response.body.items.item);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSelectedLocation(destination);
  }, [destination]);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <div>
      {locations.length > 0 ? (
        <select value={selectedLocation} onChange={handleChange}>
          <option value="">지역을 선택하세요</option>
          {locations.map((location, index) => (
            <option key={index} value={location.code}>
              {location.name}
            </option>
          ))}
        </select>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={() => handleViewChange('attractions')}>추천 명소</button>
      <button onClick={() => handleViewChange('hotels')}>숙박</button>

      {selectedLocation && (
        view === 'attractions' ? (
          <ListComponent areaCode={selectedLocation} />
        ) : (
          <ListHotel areaCode={selectedLocation} />
        )
      )}
    </div>
  );
};

export default LocationBasedList;
