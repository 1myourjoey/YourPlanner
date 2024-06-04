import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainList = ({ depPlaceId, arrPlaceId, startDate }) => {
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('');
  };

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        setLoading(true);
        const serviceKey = 'LOr7zB0jDV%2BlQ6WGnVGCY%2BvG22rkxdPRMM36e7spCgFeKjRlh488A09FtjZbwnw6bEMMW3Virexop2ihnhIe7g%3D%3D';
        const response = await axios.get(`http://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo`, {
          params: {
            serviceKey,
            depPlaceId,
            arrPlaceId,
            depPlandTime: startDate,
            _type: 'json'
          }
        });

        const items = response.data.response?.body?.items?.item;
        if (items) {
          const extractedData = items.map(item => ({
            traingradename: item.traingradename,
            depplandtime: item.depplandtime,
            arrplandtime: item.arrplandtime,
            depplacename: item.depplacename,
            arrplacename: item.arrplacename,
            adultcharge: item.adultcharge,
            trainno: item.trainno
          }));
          setTrainData(extractedData);
        } else {
          setTrainData([]);
        }
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

  if (!trainData.length) {
    return <div>해당 날짜에 대한 기차 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>기차 정보</h1>
      <ul>
        {trainData.map((train, index) => (
          <li key={train.trainno || index}>
            <p>기차 이름: {train.traingradename}</p>
            <p>출발 시간: {train.depplandtime}</p>
            <p>도착 시간: {train.arrplandtime}</p>
            <p>출발역: {train.depplacename}</p>
            <p>도착역: {train.arrplacename}</p>
            <p>요금: {train.adultcharge}</p>
            <p>기차 번호: {train.trainno}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;