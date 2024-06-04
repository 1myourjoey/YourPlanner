// ParentComponent.js
import React, { useState } from 'react';
import RecommendedPlaces from './RecommendedPlaces';

const ParentComponent = () => {
  // 선택된 항목의 상태를 부모 컴포넌트에서 관리
  const [selectedItems, setSelectedItems] = useState([]);

  // 선택된 항목을 추가하는 함수
  const handleAddItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  // 선택된 항목을 삭제하는 함수
  const handleRemoveItemClick = (itemToRemove) => {
    setSelectedItems(selectedItems.filter(item => item.title !== itemToRemove.title));
  };

  return (
    <div>
      <RecommendedPlaces 
        data={yourData} 
        selectedItems={selectedItems} 
        onAddItemClick={handleAddItemClick} 
        onRemoveItemClick={handleRemoveItemClick} 
      />
    </div>
  );
};

export default ParentComponent;
