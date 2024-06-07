import React from 'react';
import '../css/DummyFooter.css';

const DummyFooter = () => {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="f-logo">
                    <img src="../../resources/img/pattern/layout/head_logo.svg" className="logo-im" alt="YourPlanner" />
                </div>
                <div className="f-info">
                    <p className="info-addr">(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
                    <ul className="info-cs">
                        <li><strong className="strong">대표전화 1577-1000</strong><span className="span">(유료, 평일 09시~18시)</span></li>
                        <li><strong className="strong">해외이용 82-33-811-2001</strong><span className="span">(유료, 평일 09시~18시)</span></li>
                    </ul>
                </div>
                <div className="f-btm">
                    <p className="f-copy">© Ministry of Education. All rights reserved.</p>
                    <span className="ban-txt">이 누리집은 보건복지부 산하기관 누리집입니다.</span>
                </div>
            </div>
        </footer>
    );
}

export default DummyFooter;
