import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/MyPlanDetail.css'; // CSS 파일 호출


import DummyFooter from './DummyFooter';

import Header from "../js/Header";
import Chat from "../js/Chat";

import Kakao from '../img/Kakao.png';



function MyPlanDetail() {
  const { state } = useLocation();
  const [plan, setPlan] = useState(state && state.plan ? state.plan : null);
  const [newTodo, setNewTodo] = useState('');
  const [details, setDetails] = useState({
    accommodations: [],
    tours: [],
    restaurants: [],
    transportations: []
  });
  const [isKakaoInitialized, setIsKakaoInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  // 컴포넌트가 마운트될 때 newTodo의 초기값을 plan.todo로 설정
  useEffect(() => {
    if (plan && plan.todo) {
      setNewTodo(plan.todo);
    }
  }, [plan]);


  useEffect(() => {
    async function fetchPlanDetails() {
      if (!plan || !plan.saveNo) return;
      try {
        const response = await axios.get(`/api/users/${plan.saveNo}`);
        const data = response.data;

        setDetails({
          accommodations: data.accommodations,
          tours: data.tours,
          restaurants: data.restaurants,
          transportations: data.transportations
        });
      } catch (error) {
        console.error('Error fetching additional data:', error);
      }
    }

    fetchPlanDetails();
  }, [plan]);

  const handleUpdateTodo = async () => {
    if (!plan || !plan.saveNo) return;
    try {
      await axios.put(`/api/users/${plan.saveNo}/todo`, { todo: newTodo });
      setPlan({ ...plan, todo: newTodo });
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  // 카카오 SDK 초기화 및 로그인 상태 확인
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('asdasd'); // 카카오 앱 JavaScript 키로 초기화
      setIsKakaoInitialized(true);
    }

    // 로그인 상태 확인
    const accessToken = window.Kakao.Auth.getAccessToken();
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        setIsLoggedIn(true);
        console.log(authObj);
      },
      fail: (err) => {
        console.error(err);
      }
    });
  };

  const getAccommodationsText = () => {
    return details.accommodations.map(acc => `${acc.accName} (${acc.accAddress})`).join(', ');
  };

  const getRestaurantsText = () => {
    return details.restaurants.map(res => `${res.resName} (${res.resAddress})`).join(', ');
  };

  const getTransportationsText = () => {
    return details.transportations.map(trans => `${trans.transName}: ${trans.firstPlace} → ${trans.endPlace} (${trans.time})`).join(', ');
  };

  const getToursText = () => {
    return details.tours.map(tour => `${tour.tourName} (${tour.tourAddress})`).join(', ');
  };


 const handleKakaoShare = () => {
   const title = `여행 계획: ${plan.firstDate} ${plan.saveTitle}`;
   const description = `여행기간: ${plan.firstDate} - ${plan.endDate}\n출발지: ${plan.firstPlace}\n도착지: ${plan.endPlace}\n숙박: ${getAccommodationsText()}\n레스토랑: ${getRestaurantsText()}\n교통: ${getTransportationsText()}\n관광: ${getToursText()}\n할일: ${plan.todo}`;

   window.Kakao.Link.sendDefault({
     objectType: 'text', // 텍스트 타입 사용
     text: `${title}\n${description}`,
     link: {
       mobileWebUrl: window.location.href,
       webUrl: window.location.href
     },
     buttonTitle: '자세히 보기'
   });
 };

  // 코드 수정 후
  return (
    <div>
      <Header/>
      <div className="myplandetail-wrapper">
        <div className="myplandetail-container">
          {/* 왼쪽 박스 */}
          <div className="myplandetail-card">
            <h2 className="myplandetail-text-center">나의 여행 계획 상세 <Chat/></h2>
            {plan ? (
              <>
                <div className="myplandetail-section">
                  <h3>저장 제목</h3>
                  <p>{plan.saveTitle}</p>
                </div>
                <div className="myplandetail-section">
                  <h3>여행 시작 날짜</h3>
                  <p>{plan.firstDate}</p>
                </div>
                <div className="myplandetail-section">
                  <h3>여행 종료 날짜</h3>
                  <p>{plan.endDate}</p>
                </div>
                <div className="myplandetail-section">
                  <h3>출발지</h3>
                  <p>{plan.firstPlace}</p>
                </div>
                <div className="myplandetail-section">
                  <h3>도착지</h3>
                  <p>{plan.endPlace}</p>
                </div>
                <div className="myplandetail-section">
                  <h3>할일</h3>
                  <p>{plan.todo}</p>
                  <input
                    type="text"
                    className="form-control"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="새로운 할일 입력"
                  />
                  <button className="myplandetail-btn btn btn-primary" onClick={handleUpdateTodo}>입력/수정</button>
                </div>
              </>
            ) : (
              <div className="myplandetail-section">
                <h3>여행 계획을 불러오지 못했습니다.</h3>
              </div>
            )}
          </div>

          {/* 오른쪽 박스 */}

          <div className="myplandetail-card">
            {details.accommodations.length > 0 && (
              <div className="myplandetail-section">
                <h3>숙박 정보</h3>
                {details.accommodations.map((acc, index) => (
                  <div key={index}>
                    <p>{acc.accName}</p>
                    <p>{acc.accAddress}</p>
                    <p>{acc.accImg}</p>
                    <p>{acc.accTel}</p>
                  </div>
                ))}
              </div>
            )}

            {details.restaurants.length > 0 && (
              <div className="myplandetail-section">
                <h3>레스토랑 정보</h3>
                {details.restaurants.map((res, index) => (
                  <div key={index}>
                    <p>{res.resName}</p>
                    <p>{res.resAddress}</p>
                    <p>{res.resImg}</p>
                    <p>{res.resTel}</p>
                  </div>
                ))}
              </div>
            )}

            {details.transportations.length > 0 && (
              <div className="myplandetail-section">
                <h3>교통 수단 정보</h3>
                {details.transportations.map((trans, index) => (
                  <div key={index}>
                    <p>{trans.transName}</p>
                    <p>{trans.firstPlace} → {trans.endPlace}</p>
                    <p>{trans.time}</p>
                  </div>
                ))}
              </div>
            )}

            {details.tours.length > 0 && (
              <div className="myplandetail-section">
                <h3>관광 정보</h3>
                {details.tours.map((tour, index) => (
                  <div key={index}>
                    <p>{tour.tourName}</p>
                    <p>{tour.tourAddress}</p>
                    <p>{tour.tourImg}</p>
                  </div>
                ))}
              </div>
            )}

            {isLoggedIn ? (
              <button className="myplandetail-btn btn btn-primary" onClick={handleKakaoShare}>
                <img src={Kakao} alt="Kakao" style={{ width: '23px', marginRight: '8px' }} /> {/* 카카오톡 아이콘 삽입 */}
                카카오톡 공유
              </button>
            ) : (
              <button className="myplandetail-btn btn btn-primary" onClick={handleKakaoLogin}>
                <img src={Kakao} alt="Kakao" style={{ width: '20px', marginRight: '5px' }} /> {/* 카카오톡 아이콘 삽입 */}
                카카오톡 로그인
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

}
export default MyPlanDetail;