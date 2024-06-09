import React, { useState } from 'react';
import LoadMoreButton from './LoadMoreButton';
import '../css/RecommendedPlaces.css';

const RecommendedPlaces = ({ data, loadMore, loading, view, selectedItems, setSelectedItems, selectedTrains, setSelectedTrains, setView }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddClick = (item) => {
    let category;
    switch (item.contenttypeid) {
      case '12':
        category = 'attractions';
        break;
      case '32':
        category = 'hotels';
        break;
      case '39':
        category = 'restaurants';
        break;
      default:
        return;
    }

    if (!selectedItems[category]) {
      setSelectedItems(prevState => ({
        ...prevState,
        [category]: []
      }));
    }

    const existingItem = selectedItems[category]?.find(selectedItem => selectedItem.contentid === item.contentid);
    if (!existingItem) {
      const newItem = { ...item, uniqueId: Date.now() + Math.random().toString(36).substr(2, 9) };
      setSelectedItems(prevState => ({
        ...prevState,
        [category]: [...(prevState[category] || []), newItem]
      }));
    }
  };

  const handleRemoveClick = (contentid, category) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [category]: prevState[category].filter(item => item.contentid !== contentid)
    }));
  };

  const handleRemoveTrainClick = (trainno) => {
    setSelectedTrains(prevState => prevState.filter(train => train.trainno !== trainno));
  };

  const isItemSelected = (contentid, category) => {
    return selectedItems[category] && selectedItems[category].some(item => item.contentid === contentid);
  };

  const formatDate = (datetime) => {
    if (typeof datetime !== 'string') {
      datetime = datetime.toString();
    }
    const year = datetime.substring(0, 4);
    const month = datetime.substring(4, 6);
    const day = datetime.substring(6, 8);
    const hour = datetime.substring(8, 10);
    const minute = datetime.substring(10, 12);
    return `${month}월 ${day}일 ${hour}시 ${minute}분`;
  };

  const filterDataByCategory = (category) => {
    switch (category) {
      case 'attractions':
        return data.filter(item => item.contenttypeid === '12');
      case 'hotels':
        return data.filter(item => item.contenttypeid === '32');
      case 'restaurants':
        return data.filter(item => item.contenttypeid === '39');
      default:
        return data;
    }
  };

  const filteredData = selectedCategory ? filterDataByCategory(selectedCategory) : data;

  return (
    <div className="container">
      <div className="main-content">
        <div className="card-container">
          {filteredData.map((item, index) => {
            let category;
            switch (item.contenttypeid) {
              case '12':
                category = 'attractions';
                break;
              case '32':
                category = 'hotels';
                break;
              case '39':
                category = 'restaurants';
                break;
              default:
                return null;
            }
            return (
              <div key={item.contentid + index} className="card">
                <h2>{item.title}</h2>
                <p>{item.addr1}</p>
                <img
                  src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={item.title}
                  className="hotel-image"
                />
                {isItemSelected(item.contentid, category) ? (
                  <button className="remove" onClick={() => handleRemoveClick(item.contentid, category)}>삭제</button>
                ) : (
                  <button onClick={() => handleAddClick(item)}>추가</button>
                )}
              </div>
            );
          })}
        </div>
        <LoadMoreButton loadMore={loadMore} loading={loading} />
      </div>
      <div className="selected-container">
        <div className="selected-sidebar">
          <h4>선택된 관광지</h4>
          {selectedItems.attractions && selectedItems.attractions.map((item) => (
            <div key={item.uniqueId} className="card">
              <h2>{item.title}</h2>
              <p>{item.addr1}</p>
              <img src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'} alt={item.title} />
              <button className="remove" onClick={() => handleRemoveClick(item.contentid, 'attractions')}>삭제</button>
            </div>
          ))}
        </div>
        <div className="selected-sidebar">
          <h4>선택된 호텔</h4>
          {selectedItems.hotels && selectedItems.hotels.map((item) => (
            <div key={item.uniqueId} className="card">
              <h2>{item.title}</h2>
              <p>{item.addr1}</p>
              <img src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'} alt={item.title} />
              <button className="remove" onClick={() => handleRemoveClick(item.contentid, 'hotels')}>삭제</button>
            </div>
          ))}
        </div>
        <div className="selected-sidebar">
          <h4>선택된 음식점</h4>
          {selectedItems.restaurants && selectedItems.restaurants.map((item) => (
            <div key={item.uniqueId} className="card">
              <h2>{item.title}</h2>
              <p>{item.addr1}</p>
              <img src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'} alt={item.title} />
              <button className="remove" onClick={() => handleRemoveClick(item.contentid, 'restaurants')}>삭제</button>
            </div>
          ))}
        </div>
        <div className="selected-trains">
          <h4>선택된 열차</h4>
          {selectedTrains && selectedTrains.map((train) => (
            <div key={train.trainno} className="card">
              <h2>{train.trainno} - {train.traingradename}</h2>
              <p>출발: {train.depplacename}</p>
              <p>도착: {train.arrplacename}</p>
              <p>출발 시간: {formatDate(train.depplandtime)}</p>
              <p>도착 시간: {formatDate(train.arrplandtime)}</p>
              <button className="remove" onClick={() => handleRemoveTrainClick(train.trainno)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPlaces;
