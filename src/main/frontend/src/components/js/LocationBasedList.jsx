
import React, { useState, useEffect } from 'react';

import ListComponent from './ListComponent';
import ListHotel from './ListHotel';

const LocationBasedList = ({ destination2 }) => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(destination2);
  const [selectedSigungu, setSelectedSigungu] = useState('');
  const [view, setView] = useState('attractions'); // 'attractions' or 'hotels'
  const [sigungus, setSigungus] = useState([]); // 시/군/구 목록 추가
  const OPEN_KEY = "5uJ1mFn4tOfEwReTW3dupjd4w2n5kEHO5nciT%2BDVGAVWTl90sysBKbMTIlIxLW5lCPo1VmpZ%2FXggxU84GhG81g%3D%3D";

  const parseXmlToJson = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const items = Array.from(xmlDoc.getElementsByTagName('item'));
    return items.map(item => {
      const obj = {};
      Array.from(item.children).forEach(child => {
        obj[child.tagName] = child.textContent;
      });
      return obj;
    });
  };

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
    setSelectedLocation(destination2);
  }, [destination2]);

  useEffect(() => {
    const fetchSigungus = async () => {
      if (!selectedLocation) return;

      try {
        const response = await fetch(
          `http://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${OPEN_KEY}&numOfRows=32&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=${selectedLocation}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const xmlData = await response.text();
        const json = parseXmlToJson(xmlData);
        setSelectedSigungu('');
        setSigungus(json); // 시/군/구 목록 업데이트
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchSigungus();
  }, [selectedLocation]);

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleSigunguChange = (event) => {
    setSelectedSigungu(event.target.value);
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
  
      {selectedLocation && (
        <select value={selectedSigungu} onChange={handleSigunguChange}>
          <option value="">시/군/구를 선택하세요</option>
          {sigungus.map((sigungu, index) => (
            <option key={index} value={sigungu.code}>
              {sigungu.name}
            </option>
          ))}
        </select>
      )}
  
      <button onClick={() => handleViewChange('attractions')}>추천 명소</button>
      <button onClick={() => handleViewChange('hotels')}>숙박</button>
  
      {selectedLocation && (
        view === 'attractions' ? (
          <ListComponent areaCode={selectedLocation} sigunguCode={selectedSigungu}/>
        ) : (
          <ListHotel areaCode={selectedLocation} sigunguCode={selectedSigungu}/>
        )
      )}
    </div>
  );
};

export default LocationBasedList;
