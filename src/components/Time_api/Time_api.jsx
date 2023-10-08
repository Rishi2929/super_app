import React, { useEffect, useState } from 'react';
import './Time_api.css'

const TimeApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '1f9432895d7247f9b3794037230710';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`;

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
  // console.log(weatherData.location.localtime);

  return (
    
    <div>
      {weatherData ? (
        <div>
            <p className='weather_text'>{weatherData.location.localtime}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TimeApi;
