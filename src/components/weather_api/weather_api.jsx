import React, { useEffect, useState } from 'react';
import './weather_api.scss'

const Weather_Api = () => {
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

  return (
    <div>
      {weatherData ? (
        <div>
            <div className='weather_info'>
           
            <div className='firstRow'> 
                 <img src={weatherData.current.condition.icon} className='weather_icon'/> 
                <p className='weather_text'>{weatherData.current.condition.text}</p>
            </div>

              <div className='line'></div>

            <div className='secondRow'>
            <p> {weatherData.current.temp_c}°C</p>
            <p>{weatherData.current.pressure_mb} mbbar</p>
              </div>

              <div className='line'></div>

                <div className='thirdRow'>
                  <p>{weatherData.current.wind_mph} km/h</p>

                </div>

             </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather_Api;
