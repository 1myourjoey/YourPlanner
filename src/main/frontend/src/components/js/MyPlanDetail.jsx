import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MainLayout from './MainLayout'
import Footer from './Footer';
function MyPlanDetail() {
  const { state } = useLocation();
  const [plan, setPlan] = useState(state && state.plan);
  const [newTodo, setNewTodo] = useState('');

  const handleUpdateTodo = async () => {
    try {
      await axios.put(`/api/users/${plan.saveNo}/todo`, { todo: newTodo });
      // 새로운 할일을 업데이트한 후에 즉시 UI에 반영
      setPlan({ ...plan, todo: newTodo });
    } catch (error) {
      console.error('할일 업데이트 실패:', error);
      // 실패 시 필요한 처리
    }
  };

  return (

    <div className="travel-plan-details">
         <MainLayout />
      <h2>나의 여행 계획 상세</h2>
      {plan && (
        <>
          <div className="plan-section">
            <h3>저장 제목</h3>
            <p>{plan.saveTitle}</p>
          </div>
          <div className="plan-section">
            <h3>여행 시작 날짜</h3>
            <p>{plan.firstDate}</p>
          </div>
          <div className="plan-section">
            <h3>여행 종료 날짜</h3>
            <p>{plan.endDate}</p>
          </div>
          <div className="plan-section">
            <h3>출발지</h3>
            <p>{plan.firstPlace}</p>
          </div>
          <div className="plan-section">
            <h3>도착지</h3>
            <p>{plan.endPlace}</p>
          </div>
          <div className="plan-section">
            <h3>할일</h3>
            <p>{plan.todo}</p>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="새로운 할일 입력"
            />
            <button onClick={handleUpdateTodo}>입력</button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default MyPlanDetail;
