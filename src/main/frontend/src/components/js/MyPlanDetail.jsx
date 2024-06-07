import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/MyPlanDetail.css';

function MyPlanDetail() {
  const { state } = useLocation();
  const [plan, setPlan] = useState(state && state.plan);
  const [newTodo, setNewTodo] = useState('');
  const [details, setDetails] = useState({
    accommodations: [],
    tours: [],
    restaurants: [],
    transportations: []
  });

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
    try {
      await axios.put(`/api/users/${plan.saveNo}/todo`, { todo: newTodo });
      setPlan({ ...plan, todo: newTodo });
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };
  return (
    <div className="myplandetail-container">
      <div className="myplandetail-card">
        <h2 className="myplandetail-text-center">나의 여행 계획 상세</h2>
        {plan && (
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
               defaultValue={plan.todo}
               onChange={(e) => setNewTodo(e.target.value)}
             />
             <button className="myplandetail-btn btn btn-primary" onClick={handleUpdateTodo}>입력</button>
           </div>


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
          </>
        )}
      </div>
    </div>
  );
}

export default MyPlanDetail;
