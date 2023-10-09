import React, { useEffect, useState } from 'react';
import './Time_api.scss'

const TimeApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '1f9432895d7247f9b3794037230710';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setWeatherData(jsonData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);
  console.log(weatherData);

  return (
    
    <div>
      {weatherData ? (
        <div className='time_cont'>
            <p className='weather_text'>{weatherData.location.localtime}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TimeApi;
