import React, { useState, useEffect } from 'react';
import DummyListRestaurant from "./DummyListRestaurant";
import ListComponent from "./ListComponent";
import DummyListHotel from "./DummyListHotel";
import RecommendedPlaces from "./RecommendedPlaces";


/* 선택된 리스트를 저장하는 최상위 컴포넌트 */
const ListContainer = ({ areaCode, sigunguCode, view }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchData = async (pageNumber, type) => {
        try {
            setLoading(true);
            let url;
            switch (type) {
                case 'attractions':
                    url = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=5uJ1mFn4tOfEwReTW3dupjd4w2n5kEHO5nciT%2BDVGAVWTl90sysBKbMTIlIxLW5lCPo1VmpZ%2FXggxU84GhG81g%3D%3D&pageNo=${pageNumber}&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCode}&sigunguCode=${sigunguCode}`;
                    break;
                case 'hotels':
                    url = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=5uJ1mFn4tOfEwReTW3dupjd4w2n5kEHO5nciT%2BDVGAVWTl90sysBKbMTIlIxLW5lCPo1VmpZ%2FXggxU84GhG81g%3D%3D&pageNo=${pageNumber}&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=B&areaCode=${areaCode}&sigunguCode=${sigunguCode}&contentTypeId=32`;
                    break;
                case 'restaurant':
                    url = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=5V%2BytDDcz11Mfxc3tREUmoX6wOvDmA3oIaBkQfhB%2Bo%2B4vBWem3h6eQhKVvJuiJvpVonGtnuRqU6A83YSSBAh8A%3D%3D&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCode}&sigunguCode=${sigunguCode}&contentTypeId=39`;
                    break;
                default:
                    return;
            }

            const response = await fetch(url);
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
                firstimage2: item.getElementsByTagName('firstimage2')[0]?.textContent || ''
            }));
            setData(prevData => [...prevData, ...extractedData]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setData([]); // View가 변경될 때마다 데이터를 초기화합니다.
        setPage(1);
        fetchData(1, view); // 초기 데이터를 가져옵니다.
    }, [view, areaCode, sigunguCode]);

    useEffect(() => {
        if (page > 1) {
            fetchData(page, view); // 페이지가 변경될 때만 더 많은 데이터를 가져옵니다.
        }
    }, [page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };


    return (
        <div>
            {/*RecommendedPlaces에 값 전달*/}
            <RecommendedPlaces data={data} />
            <div className="load-more-container">
                <button onClick={loadMore} disabled={loading}>
                    {loading ? '로딩 중...' : '더보기'}
                </button>
            </div>
        </div>
    );
};

export default ListContainer;
