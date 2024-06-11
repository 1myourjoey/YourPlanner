import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css';





const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const cities = ['Seoul', 'Busan', 'Incheon'];

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
                                <img
                                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt={data.weather[0].description}
                                    height="100"
                                    width="100"
                                />
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

export default Weather;
