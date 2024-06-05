import React, { useState } from 'react';
import '../css/RecommendedPlaces.css';
import LoadMoreButton from './LoadMoreButton';

const RecommendedPlaces = ({ data, loadMore, loading }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddClick = (item) => {
    const existingItem = selectedItems.find(selectedItem => selectedItem.contentid === item.contentid);
    if (!existingItem) {
      const newItem = { ...item, uniqueId: Date.now() + Math.random().toString(36).substr(2, 9) };
      setSelectedItems([...selectedItems, newItem]);
    }
  };

  const handleRemoveClick = (contentid) => {
    setSelectedItems(selectedItems.filter(item => item.contentid !== contentid));
  };

  const isItemSelected = (contentid) => {
    return selectedItems.some(item => item.contentid === contentid);
  };

  return (
    <div>
      <div className="card-container">
        {data.map((item, index) => (
          <div key={item.contentid + index} className="card">
            <h2>{item.title}</h2>
            <p>{item.addr1}</p>
            <img
              src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt={item.title}
              className="hotel-image"
            />
            {isItemSelected(item.contentid) ? (
              <button onClick={() => handleRemoveClick(item.contentid)}>체크</button>
            ) : (
              <button onClick={() => handleAddClick(item)}>추가</button>
            )}
          </div>
        ))}
      </div>
      <LoadMoreButton loadMore={loadMore} loading={loading} />
      <h1>Selected Places</h1>
      <div className="selected-items">
        {selectedItems.map((item) => (
          <div key={item.uniqueId} className="card">
            <h2>{item.title}</h2>
            <p>{item.addr1}</p>
            <input type='hidden' value={item.contenttypeid}></input>
            <img
              src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt={item.title}
              className="selected-image"
            />
            <button onClick={() => handleRemoveClick(item.contentid)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPlaces;
