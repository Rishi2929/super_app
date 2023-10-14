import React, { useState, useEffect } from "react";
import "./profilepage.scss";

import images from "../../imag_array/images";
import Weather_Api from "../../components/weather_api/weather_api";
import Time_Api from "../../components/TimerComp/Time_api";
import News_api from "../../components/news_api/News_api";
import { useLocation, useNavigate } from "react-router-dom";
import TimerComp from "../../components/TimerComp/Time_api";

function ProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const directToEntertianPage = () => {
    navigate("/entertainment");
  };

  

  // const selectedGenresFromstate = location.state
  //   ? JSON.parse(location.state.selectedGenres)
  //   : [];

  const [selectedGenres, setSelectedGenres] = useState([]);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("inputData");
    const parsedData = JSON.parse(storedData);
    setUserData(parsedData);
  console.log(selectedGenres)

  }, []);


  // console.log("userData: ", userData);
// console.log(selectedGenres)
  // useEffect(() => {
  //   const savedGenres = localStorage.getItem("selectedGenres");
  //   if (savedGenres) {
  //     setSelectedGenres(JSON.parse(savedGenres));
  //   }
  // }, []);

  useEffect(() => {
    const savedGenres = localStorage.getItem("selectedGenres");
    if (savedGenres) {
      setSelectedGenres(JSON.parse(savedGenres));
    }
  }, []);
  const now = new Date();

  const year = now.getFullYear();
  let month = now.getMonth();
  const today = now.getDate();

  month = month + 1; //month is coming as 0 based indexing
  const todayDate = `${month}-${today}-${year}`;

  let hour = now.getHours();
  let minutes = now.getMinutes();
  let amOrPm = "AM";

  if (hour >= 12) {
    amOrPm = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  }

  hour = String(hour).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");

  const realTime = `${hour}:${minutes} ${amOrPm}`;
  // console.log(todayDate, realTime);

  return (
    <div>
      <div className="top_elements">
        <div>
          <div className="flex">
            <div className="profile-weather">
              <div className="Profile_card">
                <img src={images.img11}></img>
                {/* Entire user details(user name email username and genres) */}
                <div className="user_card">
                  {/* User Details which will be displayed from localStorage */}
                  <div className="user_details">
                    <p className="para">{userData.Name}</p>
                    <p className="para">{userData.Email}</p>
                    <p className="para">{userData.UserName}</p>
                    {/* User Genre which will be displayed from local storage */}

                    <div className="user_genre">
                      {selectedGenres.map((genre, index) => (
                        <p key={index}>{genre}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="weather_card">
                <div className="rect">
                  <div className="time_div">
                    <p>
                      <span className="date">{todayDate}</span>
                      <span className="time">{realTime}</span>
                    </p>
                  </div>
                </div>
                <Weather_Api />
              </div>
            </div>
            <div className="note-box">
              <h1>All notes</h1>
              <div contentEditable="true" className="note-content">
              This is how I am going to learn
              MERN Stack in next 3 months.
              </div>
            </div>
          </div>
          <div className="time-cont">
            <TimerComp />
          </div>
        </div>

        <div className="news_card">
          <div className="transparent_cont"></div>
          <div className="bottom_cont">
            <News_api />
          </div>
        </div>
      </div>
      <button className="browse-btn" onClick={directToEntertianPage}>
        Browse
      </button>
    </div>
  );
}

export default ProfilePage;
