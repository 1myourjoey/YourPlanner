import React from 'react';
import Plus from '../img/Plus.png';

const LoadMoreButton = ({ loadMore, loading }) => {
    return (
        <div className="load-more-container">
            <button className="more-button" onClick={loadMore} disabled={loading}>
                {loading ? '로딩 중...' : <><img src={Plus} alt="Plus Icon" /> 더보기</>}
            </button>
        </div>
    );
};

export default LoadMoreButton;
