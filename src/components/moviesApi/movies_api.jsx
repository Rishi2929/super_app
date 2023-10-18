import React, { useEffect, useState } from 'react';
import './movies_api.scss';

const YourComponent = () => {
  const [movieData, setMovieData] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const savedGenres = localStorage.getItem('selectedGenres');
    if (savedGenres) {
      setSelectedGenres(JSON.parse(savedGenres));
    }
  }, []);

  const fetchData = async (page) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzA5NGMxNzhlODIwYjllNWJjZGI2MDE5ZjE0ZjkwMSIsInN1YiI6IjY1MjdiM2VjODEzODMxMDBhY2Y2YTFiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vi4ZmaZk9fFt4Vymo1fwWsPsPTJ_NFVb-YgXKzWswJ0',
        },
      };

      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=120`, options);
      const data = await response.json();
      setMovieData(data.results); // Set the data as it is without filtering
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();


  // useEffect(() => {
  //   async function fetchDataAsync() {
  //     const data1 = await fetchData(4);
  //     const data2 = await fetchData(100);
  //     const data3 = await fetchData(110);
  //     const data4 = await fetchData(120);
  //     const data5 = await fetchData(130);
  //     const data6 = await fetchData(140);
  //     const data7 = await fetchData(148);
  //     const data8 = await fetchData(160);

  //     const mergedData = [
  //       ...data1,
  //       ...data2,
  //       ...data3,
  //       ...data4,
  //       ...data5,
  //       ...data6,
  //       ...data7,
  //       ...data8,
  //     ];

  //     setMovieData(mergedData);
  //   }
  //   fetchDataAsync();
  // }, []);

  
  const FilteredMoviesbyAction = () => {

    return (
      <>
        {movieData ? (
          <div>
            <h1>Action</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(28))
                .slice(0, 4) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };

  const FilteredMoviesbyDrama = () => {
    return (
      <>
        {movieData ? (
          <div>
            <h1>Drama</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(18))
                .slice(0, 4) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FilteredMoviesbyRomance = () => {
    return (
      <>
        {movieData ? (
          <div>
            <h1>Romance</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(10749))
                .slice(0, 4) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FilteredMoviesbyThriller = () => {
    return (
      <>
        {movieData ? (
          <div>
            <h1>Thriller</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(53))
                .slice(0, 4) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FilteredMoviesbyWestern = () => {
    return (
      <>
        {movieData ? (
          <div>
            <h1>Western</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(37))
                .slice(0, 4) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FilteredMoviesbyHorror = () => {
    return (
      <>
        {movieData ? (
          <div>
            <h1>Horror</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(27))
                .slice(0, 4) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FilteredMoviesbyFantasy = () => {
    return (
      <>
        {movieData ? (
          <div>
            <h1>Fantasy</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(14))
                .slice(5, 9) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FilteredMoviesbyMusic = () => {
    return (
      <>
        {movieData ? (
          <div>
            <h1>Music</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(10402))
                .slice(0, 4) // Limits the display to the first four movies
                .map((movie) => (
                  <div key={movie.id}>
                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  const FilteredMoviesbyFiction = () => {
    return (
      <>
        {movieData ? (

          <div>
            <h1>Fiction</h1>
            <ul>
              {movieData
                ?.filter((movie) => movie.genre_ids.includes(878))
                .slice(10, 14)
                .map((movie) => (
                  <div key={movie.id}>

                    <div className='movie_data'>
                      {/* {movie.title} */}
                      {/* {selectedGenres[0]} */}

                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        className='movie_img'
                      />
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };


  return (
    <div className='flex_movie_tiles'>
      <h1 className='heading'>Entertainment according to your choice</h1>
      {selectedGenres.map((item, index) =>
        <div key={index} className='filterd-movies'>
          {item === "Action" && <FilteredMoviesbyAction/>}
          {item === "Drama" && <FilteredMoviesbyDrama/>}
          {item === "Romance" &&<FilteredMoviesbyRomance/> }
          {item === "Thriller" && <FilteredMoviesbyThriller/> }
          {item === "Western" &&  <FilteredMoviesbyWestern/>}
          {item === "Horror" && <FilteredMoviesbyHorror/>}
          {item === "Fantasy" && <FilteredMoviesbyFantasy/>}
          {item === "Music" && <FilteredMoviesbyMusic/>}
          {item === "Fiction" && <FilteredMoviesbyFiction/>}




        </div>)}
    </div>
  );
};
export default YourComponent;