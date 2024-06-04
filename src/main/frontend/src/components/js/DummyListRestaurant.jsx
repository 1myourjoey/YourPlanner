import React, { useState, useEffect } from 'react';
import RecommendedPlaces from "./RecommendedPlaces";

const DummyListRestaurant = ({ areaCode, sigunguCode, addData, setLoading }) => {
    const [page, setPage] = useState(1); // 페이지 번호 상태
    const fetchInitialData = async () => {
        try {
            setLoading(true); // 로딩 상태 시작
            const response = await fetch(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=5V%2BytDDcz11Mfxc3tREUmoX6wOvDmA3oIaBkQfhB%2Bo%2B4vBWem3h6eQhKVvJuiJvpVonGtnuRqU6A83YSSBAh8A%3D%3D&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCode}&sigunguCode=${sigunguCode}&contentTypeId=39`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.text(); // XML 데이터를 텍스트로 가져옴
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(responseData, 'text/xml');
            const items = xmlData.getElementsByTagName('item');
            const extractedData = Array.from(items).map(item => ({
                title: item.getElementsByTagName('title')[0].textContent,
                addr1: item.getElementsByTagName('addr1')[0].textContent,
                contenttypeid: item.getElementsByTagName('contenttypeid')[0].textContent,
                firstimage2: item.getElementsByTagName('firstimage2')[0]?.textContent || ''
            }));
            addData(extractedData); // 초기 데이터 설정
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // 로딩 상태 종료
        }
    };

    const fetchMoreData = async (pageNumber) => {
        try {
            setLoading(true); // 로딩 상태 시작
            const response = await fetch(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=5V%2BytDDcz11Mfxc3tREUmoX6wOvDmA3oIaBkQfhB%2Bo%2B4vBWem3h6eQhKVvJuiJvpVonGtnuRqU6A83YSSBAh8A%3D%3D&pageNo=${pageNumber}&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCode}&sigunguCode=${sigunguCode}&contentTypeId=39`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.text(); // XML 데이터를 텍스트로 가져옴
            const parser = new DOMParser();
            const xmlData = parser.parseFromString(responseData, 'text/xml');
            const items = xmlData.getElementsByTagName('item');
            const extractedData = Array.from(items).map(item => ({
                title: item.getElementsByTagName('title')[0].textContent,
                addr1: item.getElementsByTagName('addr1')[0].textContent,
                contenttypeid: item.getElementsByTagName('contenttypeid')[0].textContent,
                firstimage2: item.getElementsByTagName('firstimage2')[0]?.textContent || ''
            }));
            addData(extractedData); // 새로운 데이터를 기존 데이터에 추가
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // 로딩 상태 종료
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
            {/*<div className="load-more-container">
                <button onClick={loadMore} disabled={loading}>
                    {loading ? '로딩 중...' : '더보기'}
                </button>
            </div>*/}
        </div>
    );
};

export default DummyListRestaurant;
