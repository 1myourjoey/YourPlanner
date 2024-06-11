import React, { useState } from 'react';

const SaveTourInfo = ({ startDate, endDate, departure, destination, selectedItems, selectedTrains={selectedTrains} }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saveTitle, setSaveTitle] = useState('');

    const handleSave = (title) => {
        setSaveTitle(title);
        setIsModalOpen(false);
        sendSaveRequest(title);
    };

    const sendSaveRequest = (title) => {
        const userId = sessionStorage.getItem('loginId');
        const userNo = sessionStorage.getItem(('userNo'));

        /* 값이 잘 받아지는지 console로 확인 */
        if (userId) {
            console.log('Logged in user ID:', userId);
            console.log('Logged in userNo:', userNo);
        } else {
            console.log('No user ID found in session storage.');
        }
        console.log('Selected Items:', selectedItems);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Departure:', departure);
        console.log('Destination:', destination);
        console.log('selectedTrains:', selectedTrains);
        console.log('title:', saveTitle);

        /* 컨트롤러로 api값 전송 */
        fetch('/api/savePlan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userNo: userNo,
                startDate: startDate,
                endDate: endDate,
                departure: departure,
                destination: destination,
                selectedItems:  selectedItems,
                selectedTrains: selectedTrains,
                saveTitle: title
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                if (text) {
                    return JSON.parse(text); // 텍스트가 비어있지 않으면 JSON으로 파싱
                }
                return {}; // 텍스트가 비어있으면 빈 객체 반환
            })
            .then(data => {
                console.log(data); // 서버에서 받은 응답을 콘솔에 출력
            })
            .catch(error => {
                console.error('Error sending selected items to backend:', error);
            });
    };

    return(
        <div>
            <button onClick={() => setIsModalOpen(true)}>저장</button>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
}

// 모달 컴포넌트
const Modal = ({isOpen, onClose, onSave}) => {
    const [title, setTitle] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleSave = () => {
        onSave(title);
        alert('저장이 완료되었습니다!');
    };

    return (
        <div className="modal-save">
            <div className="modal-content-save">
                <div>
                    <h4 className="modal-title">플랜 제목을 적어주세요</h4>
                </div>
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <button onClick={handleSave}>저장</button>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};


export default SaveTourInfo;
