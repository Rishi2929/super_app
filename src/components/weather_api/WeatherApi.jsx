import React, { useEffect, useState } from 'react';
import './weather_api.scss'
import images from '../../imag_array/images'


const WeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'baa0d173f09b4e6ab8e141436230910';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auto:ip&aqi=no`;

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
                 <img src={weatherData.current.condition.icon} alt='image4' className='weather_icon'/> 
                <p className='weather_text'>{weatherData.current.condition.text}</p>
            </div>

              <div className='line'></div>

            <div className='secondRow'>
            <p className='temp'>  {weatherData.current.temp_c}°C</p>
            
            <div className='Pressure_cont'>
              <img src={images.img13} alt='image5'></img>
            <p className='pressure'>{weatherData.current.pressure_mb} mbbar<br/>Pressure</p>
            </div>

              </div>

              <div className='line'></div>

                <div className='thirdRow'>

                  <div className='wind_Cont'>
                    <img src={images.img14} alt=''></img>
                  <p>{weatherData.current.wind_mph} km/h<br/>Wind</p>
                  </div>
                  <div className='humidity_cont'>
                  <img src={images.img12} alt='image3'></img>
                  <p className='humidity_text'>{weatherData.current.humidity}%<br/>humidity</p>
                  </div>


                </div>

             </div>
        </div>
      ) : (
        <div>

          </div>
      )}
    </div>
  );
};

export default WeatherApi;
