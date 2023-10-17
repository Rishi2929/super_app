import { React, useState, useEffect } from "react";
import "./movies_tile_page.scss";
import Widget from "../../components/Widget/Widget";
import images from "../../imag_array/images";
import { useNavigate } from 'react-router-dom';


function MoviesPage() {
  //Navigation
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    const genresToSave = JSON.stringify(selectedGenre);
    if(selectedGenre.length>=3)
    navigate('/profile', { state: { selectedGenres: genresToSave } });
  };

  const [selectedGenre, setSelectedGenre] = useState([]);

  useEffect(() => {
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenre));
  }, [selectedGenre]);


  // console.log(selectedGenre)
  const handleTileClick = (genre) => {
    if (!selectedGenre.includes(genre)) {
      setSelectedGenre([...selectedGenre, genre]);
    }
  };
  console.log()
  const unselectGenre = (genre) => {
    const updatedGenreList = selectedGenre.filter((selected) => selected !== genre);
    setSelectedGenre(updatedGenreList);
  };

  return (
    <div className="tile">
      <div className="left_cont">
        <h1 className="left_header">Super app</h1>
        <h1 className="left_bottom_header">Choose your <br />entertainment<br /> category </h1>

        <div className="selectedGenre">
          {selectedGenre.length > 0 && (
            <div className="genreRows">
              {selectedGenre.map((genre, index) => (
                <div className="genreTile" key={index}>
                  <p className="genre_text">{genre}</p>
                  <button className="Xbtn" onClick={() => unselectGenre(genre)} >X</button>
                </div>
              ))}
            </div>
          )}
          {
            selectedGenre.length < 3 && (
              <div className="error-box">
                <img src={images.img15} alt="Error" />
                <p style={{ color: "red" }}>Minimum 3 category required</p>

              </div>
            )
          }
        </div>




      </div>
      <div className="right_cont">

        <div className="firstRow">
          <Widget imageSrc={images.img2} color="#FF5209" genre={"Action"} onClick={() => handleTileClick("Action")} selected={selectedGenre.includes("Action")} />
          <Widget imageSrc={images.img3} color="#D7A4FF" genre={"Drama"} onClick={() => handleTileClick("Drama")} selected={selectedGenre.includes("Drama")} />
          <Widget imageSrc={images.img4} color="#148A08" genre={"Romance"} onClick={() => handleTileClick("Romance")} selected={selectedGenre.includes("Romance")} />
        </div>
        <div className="secondRow">
          <Widget imageSrc={images.img5} color="#84C2FF" genre={"Thriller"} onClick={() => handleTileClick("Thriller")} selected={selectedGenre.includes("Thriller")} />
          <Widget imageSrc={images.img6} color="#902500" genre={"Western"} onClick={() => handleTileClick("Western")} selected={selectedGenre.includes("Western")} />
          <Widget imageSrc={images.img7} color="#7358FF" genre={"Horror"} onClick={() => handleTileClick("Horror")} selected={selectedGenre.includes("Horror")} />
        </div>
        <div className="ThirdRow">
          <Widget imageSrc={images.img8} color="#FF4ADE" genre={"Fantasy"} onClick={() => handleTileClick("Fantasy")} selected={selectedGenre.includes("Fantasy")} />
          <Widget imageSrc={images.img9} color="#E61E32" genre={"Music"} onClick={() => handleTileClick("Music")} selected={selectedGenre.includes("Music")} />
          <Widget imageSrc={images.img10} color="#6CD061" genre={"Fiction"} onClick={() => handleTileClick("Fiction")} selected={selectedGenre.includes("Fiction")} />
        </div>

        <button className="btn" onClick={handleButtonClick1} >Next Page</button>

      </div>
    </div>
  );
}

export default MoviesPage;
