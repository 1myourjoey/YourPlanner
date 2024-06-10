import React from 'react';
import '../css/DummyFooter.css';
import Mypick from '../img/Mypick.png'; // 이미지를 import

const DummyFooter = () => {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="f-logo">
                    <img src={Mypick} className="logo-im" alt="YourPlanner" /> {/* 이미지를 변수로 사용 */}
                </div>
                <div className="f-info">
                    <p className="info-addr">서울 마포구 신촌로 176 중앙빌딩</p>
                    <ul className="info-cs">
                        
                        <li><strong className="strong">대표자:정상은 / 사업자등록번호:220-95-00629</strong><span className="span"></span></li>
                        <li><strong className="strong">TEL:02-704-1711(평일 09시~18시) / FAX:02-393-9218</strong><span className="span"></span></li>
                    </ul>
                </div>
                <div className="f-btm">
                    <p className="f-copy">© Ministry of Education. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default DummyFooter;
