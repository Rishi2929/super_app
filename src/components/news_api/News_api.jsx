import React, { useEffect, useState } from 'react';
import './News_api.scss';

const NewsApi = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiKey = '028c1646a8c34752a674035ebd007759';

  const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
  const api2url = `https://newsapi.org/v2/everything?q=Apple&from=2023-10-07&sortBy=popularity&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [apiUrl]);

  const nextArticle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  return (
    <div>
      {newsData.length > 0 ? (
        <div>
          <div className='news_cont'>
            <img src={newsData[currentIndex].urlToImage} alt={newsData[currentIndex].title} />
            <div className="transparent-div">
              <h2>{newsData[currentIndex].title}</h2>
            </div>
            <p>{newsData[currentIndex].description}</p>
            <a href={newsData[currentIndex].url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
          <button onClick={nextArticle}>Next Article</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsApi;
