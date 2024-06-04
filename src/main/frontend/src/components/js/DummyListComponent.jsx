import React, { useState, useEffect } from 'react';
import RecommendedPlaces from './RecommendedPlaces';

const DummyListComponent = ({ areaCode, sigunguCode, addData, setLoading }) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); // 로딩 상태
    const fetchInitialData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=5uJ1mFn4tOfEwReTW3dupjd4w2n5kEHO5nciT%2BDVGAVWTl90sysBKbMTIlIxLW5lCPo1VmpZ%2FXggxU84GhG81g%3D%3D&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCode}&sigunguCode=${sigunguCode}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.text();
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(responseData, 'text/xml');
            const items = xmlData.getElementsByTagName('item');
            const extractedData = Array.from(items).map(item => ({
                title: item.getElementsByTagName('title')[0].textContent,
                addr1: item.getElementsByTagName('addr1')[0].textContent,
                contenttypeid: item.getElementsByTagName('contenttypeid')[0].textContent,
                firstimage2: item.getElementsByTagName('firstimage2')[0]?.textContent || ''
            }));
            addData(extractedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMoreData = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await fetch(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=5uJ1mFn4tOfEwReTW3dupjd4w2n5kEHO5nciT%2BDVGAVWTl90sysBKbMTIlIxLW5lCPo1VmpZ%2FXggxU84GhG81g%3D%3D&pageNo=${pageNumber}&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCode}&sigunguCode=${sigunguCode}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.text();
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(responseData, 'text/xml');
            const items = xmlData.getElementsByTagName('item');
            const extractedData = Array.from(items).map(item => ({
                title: item.getElementsByTagName('title')[0].textContent,
                addr1: item.getElementsByTagName('addr1')[0].textContent,
                contenttypeid: item.getElementsByTagName('contenttypeid')[0].textContent,
                firstimage2: item.getElementsByTagName('firstimage2')[0]?.textContent || ''
            }));
            addData(extractedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInitialData(); // 초기 로딩 시 데이터 가져오기
    }, [areaCode, sigunguCode]);

    useEffect(() => {
        if (page > 1) {
            fetchMoreData(page); // 페이지가 변경될 때만 더 많은 데이터를 가져옴
        }
    }, [page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1); // 페이지 번호 증가
    };

    return (
        <div>
            <RecommendedPlaces />
            <div className="load-more-container">
                <button onClick={loadMore} disabled={loading}>
                    {loading ? '로딩 중...' : '더보기'}
                </button>
            </div>
        </div>
    );
};

export default DummyListComponent;
