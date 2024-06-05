import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const cities = ['Seoul','Jeju', 'Busan', 'Incheon', 'Daegu','Daejeon','Ulsan'];

        const fetchWeatherData = async () => {
            try {
                const responses = await Promise.all(
                    cities.map(city =>
                        axios.get('/api/weather', {
                            params: { city }
                        })
                    )
                );
                const data = responses.map(response => response.data);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <footer className="container footer-flow">
            <div className="row">
                {weatherData.map((data, index) => (
                    <div className="col" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <svg height="100" width="100">
                                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="3" fill="grey"/>
                                </svg>
                                <h5 className="card-title">Weather in {data.name}</h5>
                                <p className="card-text">Temperature: {data.main.temp}°C</p>
                                <p className="card-text">Weather: {data.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
