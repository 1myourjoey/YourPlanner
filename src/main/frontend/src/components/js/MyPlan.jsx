import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MyPlan() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        const response = await axios.get('/api/users/saves');
        const formattedPlans = response.data.map(plan => ({
          ...plan,
          firstDate: plan.firstDate.slice(0, 10), // 2024-06-10T12:00:00 -> 2024-06-10
          endDate: plan.endDate.slice(0, 10) // 2024-06-10T12:00:00 -> 2024-06-10
        }));
        setPlans(formattedPlans);
      } catch (error) {
        console.error('Error fetching plan data:', error);
      }
    };

    fetchPlanData();
  }, []);

  const handleShowDetails = (plan) => {
    navigate('/MyPlanDetail', { state: { plan } });
  };

  return (
    <div className="myplan-container">
      <h2>나의 여행 계획</h2>
      {plans.length > 0 ? (
        <div className="plan-list">
          {plans.map((plan, index) => (
            <div key={index} className="plan-details">
              <p><strong>저장 제목:</strong> {plan.saveTitle}</p>
              <p><strong>여행 시작 날짜:</strong> {plan.firstDate}</p>
              <p><strong>여행 종료 날짜:</strong> {plan.endDate}</p>
              <p><strong>출발지:</strong> {plan.firstPlace}</p>
              <p><strong>도착지:</strong> {plan.endPlace}</p>

              <button type="button" onClick={() => handleShowDetails(plan)}>상세 보기</button>
            </div>
          ))}
        </div>
      ) : (
        <p>여행 계획이 없습니다.</p>
      )}
    </div>
  );
}

export default MyPlan;
