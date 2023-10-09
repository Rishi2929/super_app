import React, { useState,useEffect } from 'react'
import './profilepage.scss'

import images from '../../imag_array/images'
import Weather_Api from '../../components/weather_api/weather_api'
import Time_Api from '../../components/Time_api/Time_api';
import News_api from '../../components/news_api/News_api';
import { useLocation } from 'react-router-dom';




function ProfilePage() {
  const storedData = localStorage.getItem("inputData");
  const parsedData = JSON.parse(storedData);
  const location = useLocation();
  const selectedGenresFromstate = location.state ? JSON.parse(location.state.selectedGenres) : [];

  const [selectedGenres, setSelectedGenres] = useState([]);



  const [Name, setName] = useState(parsedData.Name || "");
const [UserName, setUserName] = useState(parsedData.UserName || "");
const [Email, setEmail] = useState(parsedData.Email || "");
// const [Mobile, setMobile] = useState(parsedData.Mobile || "");


useEffect(() => {
  const savedGenres = localStorage.getItem("selectedGenres");
  if (savedGenres) {
    setSelectedGenres(JSON.parse(savedGenres));
  }
}, []);




  // console.log(storedData)
  return (
    <div>
      <div className='top_elements'>
      <div>
      <div className='Profile_card'>
      
        <img src={images.img11}></img>
        <div>
          {/* Entire user details(user name email username and genres) */}
        <div className='user_card'>
          {/* User Details which will be displayed from localStorage */}
       <div className='user_details'>
       <p className='para'>{Name}</p> 
          <p className='para'>{Email}</p> 
          <p className='para'>{UserName}</p> 
                    {/* User Genre which will be displayed from local storage */}

          <div className='user_genre'>
                  {selectedGenresFromstate.map((genre, index) => (
                    <p key={index}>{genre}</p>
                  ))}
                </div>
       </div>
      
        </div>

        </div>

      </div>

      <div className='weather_card'>
        <div className='rect'>
          <div className='time_div'>
          <Time_Api/>

          </div>
        </div>
        <Weather_Api/>

     </div>
      </div>
     
      <div className='news_card'>
        <div className='transparent_cont'>

        </div>
        <div className='bottom_cont'>
        <News_api/>

        </div>
      </div>
      </div>
    </div>
  )
}

export default ProfilePage