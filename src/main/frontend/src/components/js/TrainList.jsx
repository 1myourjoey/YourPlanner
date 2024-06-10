// src/components/TrainList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCode from './TrainCode';

const TrainList = ({ depPlaceId, arrPlaceId, startDate, selectedTrains, setSelectedTrains }) => {
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatDate = (datetime) => {
    if (typeof datetime !== 'string') {
      datetime = datetime.toString();
    }
    const year = datetime.substring(0, 4);
    const month = datetime.substring(4, 6);
    const day = datetime.substring(6, 8);
    const hour = datetime.substring(8, 10);
    const minute = datetime.substring(10, 12);
    return `${month}월 ${day}일 ${hour}시 ${minute}분`;
  };

  const handleAddClick = (train) => {
    if (!isTrainSelected(train.trainno)) {
      const newTrain = { ...train, uniqueId: Date.now() + Math.random().toString(36).substr(2, 9) };
      setSelectedTrains([...selectedTrains, newTrain]);
    }
  };

  const handleRemoveClick = (trainno) => {
    setSelectedTrains(selectedTrains.filter(train => train.trainno !== trainno));
  };

  const isTrainSelected = (trainno) => {
    return selectedTrains.some(train => train.trainno === trainno);
  };

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        setLoading(true);
        const serviceKey = 'LOr7zB0jDV+lQ6WGnVGCY+vG22rkxdPRMM36e7spCgFeKjRlh488A09FtjZbwnw6bEMMW3Virexop2ihnhIe7g==';
        const formattedDate = startDate.replace(/-/g, '');

        const allTrainData = [];

        for (const depCode of depPlaceId) {
          for (const destCode of arrPlaceId) {
            console.log(`Fetching data for depCode: ${depCode}, destCode: ${destCode}, date: ${formattedDate}`);

            const response = await axios.get('http://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo', {
              params: {
                serviceKey,
                depPlaceId: depCode,
                arrPlaceId: destCode,
                depPlandTime: formattedDate,
                _type: 'json',
                trainGradeCode: '00'
              }
            });

            console.log('API response:', response.data);

            const items = response.data.response?.body?.items?.item;

            if (items && Array.isArray(items)) {
              const extractedData = items.map(item => ({
                traingradename: item.traingradename,
                depplandtime: item.depplandtime,
                arrplandtime: item.arrplandtime,
                depplacename: item.depplacename,
                arrplacename: item.arrplacename,
                adultcharge: item.adultcharge,
                trainno: item.trainno
              }));
              allTrainData.push(...extractedData);
            } else if (items) {
              const extractedData = [{
                traingradename: items.traingradename,
                depplandtime: items.depplandtime,
                arrplandtime: items.arrplandtime,
                depplacename: items.depplacename,
                arrplacename: items.arrplacename,
                adultcharge: items.adultcharge,
                trainno: items.trainno
              }];
              allTrainData.push(...extractedData);
            }
          }
        }

        setTrainData(allTrainData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (depPlaceId && arrPlaceId && startDate) {
      fetchTrainData();
    }
  }, [depPlaceId, arrPlaceId, startDate]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {trainData.map((train, index) => (
          <li key={train.trainno || index}>
            <p>{train.traingradename} / 출발: {train.depplacename}역 {formatDate(train.depplandtime)} / 도착: {train.arrplacename}역 {formatDate(train.arrplandtime)} / 요금: {train.adultcharge}원 / 열차번호: {train.trainno}</p>
            {isTrainSelected(train.trainno) ? (
              <button onClick={() => handleRemoveClick(train.trainno)}>삭제</button>
            ) : (
              <button onClick={() => handleAddClick(train)}>추가</button>
            )}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TrainList;
