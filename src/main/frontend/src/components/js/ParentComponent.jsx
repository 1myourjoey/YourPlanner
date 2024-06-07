import React, { useState } from 'react';
import RecommendedPlaces from './RecommendedPlaces';
import TrainList from './TrainList';

const ParentComponent = () => {
  const [selectedItems, setSelectedItems] = useState({
    attractions: [],
    hotels: [],
    restaurants: [],
  });
  const [selectedTrains, setSelectedTrains] = useState([]);
  const [data, setData] = useState([]); // 기존 데이터 설정 부분
  const [depPlaceId, setDepPlaceId] = useState('NAT010000'); // 예시 값으로 서울
  const [arrPlaceId, setArrPlaceId] = useState('NAT014445'); // 예시 값으로 부산
  const [startDate, setStartDate] = useState('');

  return (
    <div>
      <TrainList
        depPlaceId={depPlaceId}
        arrPlaceId={arrPlaceId}
        startDate={startDate}
        selectedTrains={selectedTrains}
        setSelectedTrains={setSelectedTrains}
      />
      <RecommendedPlaces
        data={data}
        loadMore={() => {}}
        loading={false}
        view="list"
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedTrains={selectedTrains} // 전달
        setSelectedTrains={setSelectedTrains} // 전달
      />
    </div>
  );
};

export default ParentComponent;
