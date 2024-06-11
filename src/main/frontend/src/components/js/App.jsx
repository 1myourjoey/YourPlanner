import React, { useState } from 'react';
import RecommendedPlaces from './RecommendedPlaces';
import TrainList from './TrainList';

const App = () => {
  const [selectedItems, setSelectedItems] = useState({
    attractions: [],
    hotels: [],
    restaurants: []
  });
  const [selectedTrains, setSelectedTrains] = useState([]);
  const [trainParams, setTrainParams] = useState({
    depPlaceId: 'NAT010000',  // 예시: 서울
    arrPlaceId: 'NAT014445',  // 예시: 부산
    startDate: '20230610'     // 예시 날짜
  });

  // 다른 필요한 상태와 로직을 추가할 수 있습니다.

  return (
      <div>
          <h1>Recommended Places and Train List</h1>
          <RecommendedPlaces
              data={/* data props */}
              loadMore={/* loadMore props */}
              loading={/* loading props */}
              view={/* view props */}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
          />
          <TrainList/>
      </div>
      )
}
