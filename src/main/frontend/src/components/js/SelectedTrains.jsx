import React from 'react';

const SelectedTrains = ({ selectedTrains = [], setSelectedTrains }) => {
  return (
    <ul className="selected-items">
      {selectedTrains.map((train) => (
        <div key={train.uniqueId} className="card">
          <p>
            {train.traingradename} / 출발: {train.depplacename}역 {train.depplandtime} / 도착: {train.arrplacename}역 {train.arrplandtime} / 요금: {train.adultcharge}원 / 열차번호: {train.trainno}
          </p>
          
          <button onClick={() => setSelectedTrains(selectedTrains.filter(t => t.trainno !== train.trainno))}>
            삭제
          </button>
        </div>
      ))}
    </ul>
  );
};

export default SelectedTrains;
