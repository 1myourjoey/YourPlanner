import React, { useState } from 'react';
import '../css/RecommendedPlaces.css';


const RecommendedPlaces = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddClick = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleRemoveClick = (itemToRemove) => {
    setSelectedItems(selectedItems.filter(item => item.title !== itemToRemove.title));
  };

  return (
    <div>
      <h2>추천 명소</h2>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={index} className="card">
            
            <h2>{item.title}</h2>
            <p>{item.addr1}</p>
            <img
              src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt={item.title}
              className="hotel-image"
            />
            <button onClick={() => handleAddClick(item)}>추가</button>
          </div>
        ))}
      </div>
      <h1>Selected Places</h1>
      <div className="selected-items">
        {selectedItems.map((item, index) => (
          <div key={index} className="card">
            
            <h2>{item.title}</h2>
            <p>{item.addr1}</p>
            <img
              src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt={item.title}
              className="selected-image"
            />
            <button onClick={() => handleRemoveClick(item)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPlaces;
