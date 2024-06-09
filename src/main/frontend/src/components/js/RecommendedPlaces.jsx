import React from 'react';
import '../css/RecommendedPlacesSungyong.css';
import LoadMoreButton from './LoadMoreButton';

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
    <div className="recommendedPlaces-body">
      <div className="card-container">
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
              <div key={item.contentid + index} className="card mb-2 pb-3">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                        src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                        alt={item.title}
                        className="hotel-image"
                    />
                  </div>
                  <div className="col-md-8 align-content-center">
                    <h4>{item.title}</h4>
                    <p>{item.addr1}</p>
                  </div>
                  <div className="col-md-2 align-content-center">
                    {isItemSelected(item.contentid, category) ? (
                        <button onClick={() => handleRemoveClick(item.contentid, category)}>체크</button>
                    ) : (
                        <button onClick={() => handleAddClick(item)}>추가</button>
                    )}
                  </div>
                </div>
              </div>
          );
        })}
        <LoadMoreButton loadMore={loadMore} loading={loading}/>
      </div>

      {/* ---------- 선택한 값들 저장하는 컨테이너 시작 ---------- */}
      <div className="select-container">
        <h3>Selected Attractions</h3>
        <div className="mb-2">
          <div className="row g-0">
            {selectedItems.attractions && selectedItems.attractions.map((item) => (
                <div key={item.uniqueId} className="card mb-2 pb-2">
                  <div className="row g-0 mb-3">
                    <div className="col-md-2">
                      <img
                          src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                          alt={item.title}
                          className="selected-image"
                      />
                    </div>
                    <div className="col-md-8 align-content-center">
                      <div className="card-info">
                        <h4>{item.title}</h4>
                        <p>{item.addr1}</p>
                      </div>
                    </div>
                    <div className="col-md-2 align-content-center">
                      <button onClick={() => handleRemoveClick(item.contentid, 'attractions')}>삭제</button>
                    </div>
                  </div>
                </div>

            ))}
          </div>
        </div>
        <h3>Selected Hotels</h3>
        <div className="mb-2 pb-2">
          <div className="row g-0">
            {selectedItems.hotels && selectedItems.hotels.map((item) => (
                <div key={item.uniqueId} className="card mb-2 pb-3">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                          src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                          alt={item.title}
                          className="selected-image"
                      />
                    </div>
                    <div className="col-md-8 align-content-center">
                      <div className="card-info">
                        <h4>{item.title}</h4>
                        <p>{item.addr1}</p>
                      </div>
                    </div>
                    <div className="col-md-2 align-content-center">
                      <button onClick={() => handleRemoveClick(item.contentid, 'hotels')}>삭제</button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <h3>Selected Restaurants</h3>
        <div className="mb-2 pb-2">
          <div className="row g-0">
            {selectedItems.restaurants && selectedItems.restaurants.map((item) => (
                <div key={item.uniqueId} className="card mb-2 pb-3">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                          src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                          alt={item.title}
                          className="selected-image"
                      />
                    </div>
                    <div className="col-md-8 align-content-center">
                      <div className="card-info">
                        <h4>{item.title}</h4>
                        <p>{item.addr1}</p>
                      </div>
                    </div>
                    <div className="col-md-2 align-content-center">
                      <button onClick={() => handleRemoveClick(item.contentid, 'restaurants')}>삭제</button>
                    </div>
                  </div>
                </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default RecommendedPlaces;
