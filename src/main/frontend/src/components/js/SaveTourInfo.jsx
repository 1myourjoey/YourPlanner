import React from 'react';

const SaveTourInfo = ({ startDate, endDate, departure, destination, selectedItems, selectedTrains={selectedTrains} }) => {

    const handleClick = () => {
        console.log('Selected Items:', selectedItems);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Departure:', departure);
        console.log('Destination:', destination);
        console.log('selectedTrains:', selectedTrains);

        /* 컨트롤러로 api값 전송 */
        fetch('/api/savePlan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startDate: startDate,
                endDate: endDate,
                departure: departure,
                destination: destination,
                selectedItems:  selectedItems,
                selectedTrains: selectedTrains
            })

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
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
            <button onClick={handleClick}>저장</button>
        </div>
    );
}

export default SaveTourInfo;
