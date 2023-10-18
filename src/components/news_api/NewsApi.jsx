import React, { useCallback, useEffect, useState } from 'react';
import './News_api.scss';

const NewsApi = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex] = useState(0);
  const apiKey = '028c1646a8c34752a674035ebd007759';

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&-news&apiKey=${apiKey}`;


  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  }, [apiUrl]);



  useEffect(() => {
    fetchData();
  }, [fetchData]);



  console.log(newsData)


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

  const realTime = `${hour}:${minutes} ${amOrPm}`

  return (
    <div>
      {newsData.length > 0 ? (
        <div>
          <div className='news_cont'>
            <img src={newsData[currentIndex].urlToImage} alt={newsData[currentIndex].title} />
           


            <div className="transparent-div">
              <h1>{newsData[currentIndex].title}</h1>
              <div className='time-cont1'>
                <div className='news_time-cont'>

              <span className="date">{todayDate}</span>
              <span class="vertical-line"></span>

              <span className="time">{realTime}</span>
                  </div>

              </div>
            </div>
            <div className='news-content-text-box' >
              <p className="news-content-text">{newsData[currentIndex].description} {newsData[currentIndex].content}</p>

            </div>
          </div>

        </div>
      ) : (
        <div>
          <div className='dummy_news_cont'>
            <img src='https://placehold.jp/eeeeee/cccccc/350x150.png?text=No%20Image' alt='image2'></img>
            <div className="dummy_transparent-div">

            </div>
            <div className='dummy_news-content-text-box' >
              <div className='dummy-rect-flex'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect3'></div>
              </div>

            </div>

            <div className='dummy_news-content-text-box' >
              <div className='dummy-rect-flex'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect3'></div>
              </div>

            </div>

            <div className='dummy_news-content-text-box' >
              <div className='dummy-rect-flex'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect3'></div>
              </div>

            </div>
            <div className='dummy_news-content-text-box' >
              <div className='dummy-rect-flex'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect3'></div>
              </div>

            </div>

            <div className='dummy_news-content-text-box' >
              <div className='dummy-rect-flex'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect3'></div>
              </div>

            </div>

            <div className='dummy_news-content-text-box' >
              <div className='dummy-rect-flex'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect3'></div>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default NewsApi;