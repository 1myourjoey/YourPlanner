import React, { useState, useEffect } from 'react';
import axios from 'axios';

const formatDate = (datetime) => {
  if (typeof datetime !== 'string') {
    datetime = datetime.toString();
  }
  const year = datetime.substring(0, 4);
  const month = datetime.substring(4, 6);
  const day = datetime.substring(6, 8);
  const hour = datetime.substring(8, 10);
  const minute = datetime.substring(10, 12);

  return `${month}월${day}일 ${hour}시${minute}분`;
};

const TrainList = ({ depPlaceId, arrPlaceId, startDate }) => {
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        setLoading(true);
        const serviceKey = 'LOr7zB0jDV+lQ6WGnVGCY+vG22rkxdPRMM36e7spCgFeKjRlh488A09FtjZbwnw6bEMMW3Virexop2ihnhIe7g==';
        const formattedDate = startDate.replace(/-/g, '');
        console.log('Formatted Date:', formattedDate);
        console.log('depPlaceId:', depPlaceId);
        console.log('arrPlaceId:', arrPlaceId);

        const response = await axios.get('http://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo', {
          params: {
            serviceKey,
            depPlaceId,
            arrPlaceId,
            depPlandTime: formattedDate,
            _type: 'json',
            trainGradeCode: '00' // 예: 모든 차량 종류 포함
          }
        });

        console.log('API Response:', response.data); // 응답 데이터 확인
        console.log('Response Header:', response.data.response.header); // 응답 헤더 확인
        console.log('Response Body:', response.data.response.body); // 응답 본문 확인

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
          setTrainData(extractedData);
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

  return (
    <div>
      <ul>
        {trainData.map((train, index) => (
          <li key={train.trainno || index}>
            <p>{train.traingradename} / 출발: {train.depplacename}역 {formatDate(train.depplandtime)} / 도착: {train.arrplacename}역 {formatDate(train.arrplandtime)} / 요금: {train.adultcharge}원 / 열차번호: {train.trainno}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
