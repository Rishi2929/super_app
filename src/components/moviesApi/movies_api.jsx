import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MoviesApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://mystoreapi.com/catalog/categories',
        params: {
          order_by: 'date',
          type: 'movie'
        },
        headers: {
          'X-RapidAPI-Key': '892896d029msh07ce26dca18d008p13128cjsn5a6230a06b1b',
          'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MoviesApi;
