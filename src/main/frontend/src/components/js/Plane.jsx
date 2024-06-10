import React, { useEffect, useState } from 'react';
import '../css/Plane.css';

function Plane() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prevPosition => ({
                x: (prevPosition.x + 1) % window.innerWidth,
                y: prevPosition.y
            }));
        }, 10); // 비행기 이동 속도 설정 (ms 단위)

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="plane"
            style={{
                left: position.x,
                top: position.y
            }}
        ></div>
    );
}

export default Plane;
