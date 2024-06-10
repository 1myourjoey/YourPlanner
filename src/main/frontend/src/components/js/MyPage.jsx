import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function MyPage() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        const response = await axios.get('/api/users/saves');
        const formattedPlans = response.data.map(plan => ({
          ...plan,
          firstDate: plan.firstDate.slice(0, 10),
          endDate: plan.endDate.slice(0, 10)
        }));
        setPlans(formattedPlans);
      } catch (error) {
        console.error('Error fetching plan data:', error);
      }
    };

    fetchPlanData();
  }, [plans]);

  const handleShowDetails = (plan) => {
    navigate('/MyPlanDetail', { state: { plan } });
  };

  const handleDeletePlan = async (saveNo) => {
    try {
      await axios.delete(`/api/users/${saveNo}/delete`);
      // 삭제 후 해당 계획을 상태에서 제거하여 UI를 업데이트합니다.
      setPlans(plans.filter(plan => plan.saveNO !== saveNo));
    } catch (error) {
      console.error('계획 삭제 중 오류 발생:', error);
    }
  };

  return (
    <div className="myplan-container">
      <h2>마이페이지</h2>

      <Link to="/myplan">회원정보</Link>
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
             <button type="button" onClick={() => handleDeletePlan(plan.saveNo)}>삭제</button>
           </div>
         ))}
        </div>
      ) : (
        <p>여행 계획이 없습니다.</p>
      )}
    </div>
  );
}

export default MyPage;
