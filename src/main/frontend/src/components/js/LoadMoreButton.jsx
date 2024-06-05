import React from 'react';

const LoadMoreButton = ({ loadMore, loading }) => {
    return (
        <div className="load-more-container">
            <button onClick={loadMore} disabled={loading}>
                {loading ? '로딩 중...' : '더보기'}
            </button>
        </div>
    );
};

export default LoadMoreButton;
