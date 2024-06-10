import React from 'react';
import '../css/RecommendedPlaces.css';
import LoadMoreButton from './LoadMoreButton';
import Check from '../img/Check.png';
import SelectedTrains from './SelectedTrains';

const RecommendedPlaces = ({ data, loadMore, loading, view, selectedItems, setSelectedItems, selectedTrains, setSelectedTrains }) => {

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


  return (
    <div>
      <div className="list-container">
        <ul className="card-container">
          {data.map((item, index) => {
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
              <li key={item.contentid + index} className="card">
                <div className="image-text-container">
                  <img
                    src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={item.title}
                    className="hotel-image"
                  />
                  <div className="text-container">
                    <h5>{item.title}</h5>
                    <p>{item.addr1}</p>
                  </div>
                </div>
                {isItemSelected(item.contentid, category) ? (
                  <button className="selected-button" onClick={() => handleRemoveClick(item.contentid, category)}><img src={Check} alt="Icon" /></button>
                ) : (
                  <button className="add-button" onClick={() => handleAddClick(item)}>추가</button>
                )}
              </li>
            );
          })}
        </ul>
        
        <div className="selected-container">
          {selectedItems.attractions && selectedItems.attractions.length > 0 && (
            <>
              
              <ul className="selected-items">
                {selectedItems.attractions.map((item) => (
                  <li key={item.uniqueId} className="card">
                    <img
                      src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                      alt={item.title}
                      className="selected-image"
                    />
                    <div className="text-container">
                      <h5>{item.title}</h5>
                      <p>{item.addr1}</p>
                      <p>명소</p>
                    </div>
                    <button onClick={() => handleRemoveClick(item.contentid, 'attractions')}>삭제</button>
                  </li>
                ))}
              </ul>
            </>
          )}
          
          {selectedItems.hotels && selectedItems.hotels.length > 0 && (
            <>
              <ul className="selected-items">
                {selectedItems.hotels.map((item) => (
                  <li key={item.uniqueId} className="card">
                    <img
                      src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                      alt={item.title}
                      className="selected-image"
                    />
                    <div className="text-container">
                      <h5>{item.title}</h5>
                      <p>{item.addr1}</p>
                      <p>숙박</p>
                    </div>
                    <button onClick={() => handleRemoveClick(item.contentid, 'hotels')}>삭제</button>
                  </li>
                ))}
              </ul>
            </>
          )}
          
          {selectedItems.restaurants && selectedItems.restaurants.length > 0 && (
            <>
              <ul className="selected-items">
                {selectedItems.restaurants.map((item) => (
                  <li key={item.uniqueId} className="card">
                    <img
                      src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                      alt={item.title}
                      className="selected-image"
                    />
                    <div className="text-container">
                      <h5>{item.title}</h5>
                      <p>{item.addr1}</p>
                      <p>맛집</p>
                    </div>
                    <button onClick={() => handleRemoveClick(item.contentid, 'restaurants')}>삭제</button>
                  </li>
                ))}
              </ul>
            </>

          )}
          <SelectedTrains selectedTrains={selectedTrains} setSelectedTrains={setSelectedTrains} />
        </div>
      </div>
      <LoadMoreButton loadMore={loadMore} loading={loading} />
    </div>
  );
}

export default RecommendedPlaces;
