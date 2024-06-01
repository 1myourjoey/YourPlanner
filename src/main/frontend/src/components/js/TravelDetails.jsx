import React from 'react';
import { useLocation } from 'react-router-dom';

const TravelDetails = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const startDate = params.get('startDate');
    const endDate = params.get('endDate');
    const destination = params.get('destination');

    return (
        <div>
            <h2>Travel Details</h2>
            <p><strong>Destination:</strong> {destination}</p>
            <p><strong>Start Date:</strong> {startDate}</p>
            <p><strong>End Date:</strong> {endDate}</p>
        </div>
    );
};

export default TravelDetails;
