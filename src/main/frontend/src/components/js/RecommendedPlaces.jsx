import React from 'react';
import '../css/RecommendedPlaces.css';
import LoadMoreButton from './LoadMoreButton';

const RecommendedPlaces = ({ data, loadMore, loading, view, selectedItems, setSelectedItems }) => {

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

    // Ensure the category array exists
    if (!selectedItems[category]) {
      setSelectedItems(prevState => ({
        ...prevState,
        [category]: []
      }));
    }

    // Check if the item already exists in the category array
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

  const isItemSelected = (contentid, category) => {
    return selectedItems[category] && selectedItems[category].some(item => item.contentid === contentid);
  };

  return (
    <div>
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
            <div key={item.contentid + index} className="card">
              <h2>{item.title}</h2>
              <p>{item.addr1}</p>
              <img
                src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={item.title}
                className="hotel-image"
              />
              {isItemSelected(item.contentid, category) ? (
                <button onClick={() => handleRemoveClick(item.contentid, category)}>체크</button>
              ) : (
                <button onClick={() => handleAddClick(item)}>추가</button>
              )}
            </div>
          );
        })}
      </div>
      <LoadMoreButton loadMore={loadMore} loading={loading} />
      <div>
        <h1>Selected Attractions</h1>
        <div className="selected-items">
          {selectedItems.attractions && selectedItems.attractions.map((item) => (
            <div key={item.uniqueId} className="card">
              <h2>{item.title}</h2>
              <p>{item.addr1}</p>
              <img
                src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={item.title}
                className="selected-image"
              />
              <button onClick={() => handleRemoveClick(item.contentid, 'attractions')}>삭제</button>
            </div>
          ))}
        </div>

        <h1>Selected Hotels</h1>
        <div className="selected-items">
          {selectedItems.hotels && selectedItems.hotels.map((item) => (
            <div key={item.uniqueId} className="card">
              <h2>{item.title}</h2>
              <p>{item.addr1}</p>
              <img
                src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={item.title}
                className="selected-image"
              />
              <button onClick={() => handleRemoveClick(item.contentid, 'hotels')}>삭제</button>
            </div>
          ))}
        </div>

        <h1>Selected Restaurants</h1>
        <div className="selected-items">
          {selectedItems.restaurants && selectedItems.restaurants.map((item) => (
            <div key={item.uniqueId} className="card">
              <h2>{item.title}</h2>
              <p>{item.addr1}</p>
              <img
                src={item.firstimage2 || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={item.title}
                className="selected-image"
              />
              <button onClick={() => handleRemoveClick(item.contentid, 'restaurants')}>삭제</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPlaces;
