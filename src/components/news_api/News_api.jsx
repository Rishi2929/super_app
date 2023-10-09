import React, { useEffect, useState } from 'react';
import './News_api.scss';

const NewsApi = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiKey = '028c1646a8c34752a674035ebd007759';

  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&-news&apiKey=${apiKey}`;


  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      console.log("first")
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

 
  // console.log(newsData)

  return (
    <div>
      {newsData.length > 0 ? (
        <div>
          <div className='news_cont'>
            <img src={newsData[currentIndex].urlToImage} alt={newsData[currentIndex].title} />

            <div className="transparent-div">
              <h1>{newsData[currentIndex].title}</h1>
            </div>

            <p className="news-content-text">{newsData[currentIndex].description} {newsData[currentIndex].content}</p>
            {/* <a href={newsData[currentIndex].url} target="_blank" rel="noopener noreferrer">
              Read More
            </a> */}
          </div>

        </div>
      ) : (
        <p>Loading
          {/* <div>
          <div className='news_cont'>

            <div className="transparent-div">

            </div>

        
          </div>
          <button onClick={nextArticle}>Next Article</button>
        </div> */}
        </p>
      )}
    </div>
  );
};

export default NewsApi;