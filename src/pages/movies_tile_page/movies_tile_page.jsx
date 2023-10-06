import {React,useState} from "react";
import "./movies_tile_page.css";
import Widget from "../../components/Widget/Widget";
import images from "../../imag_array/images";

function Movies_tile_page() {
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

      
    const handleTileClick = (genre) => {
            if(!selectedGenre.includes(genre)){
                setSelectedGenre([...selectedGenre,genre]);
            }
        };

        
        const unselectGenre = (genre) => {
            const updatedGenreList = selectedGenre.filter((selected) => selected !== genre);
            setSelectedGenre(updatedGenreList);
          };
      
  return (
    <div className="tile">
      <div className="left_cont">
        <h1 className="left_header">Super app</h1>
        <h1 className="left_bottom_header">Choose your <br/>entertainment<br/> category </h1>

        <div className="selectedGenre">
  {selectedGenre.length > 0 && (
    <div className="genreRows">
      {selectedGenre.map((genre, index) => (
        <div className="genreTile" key={index}>
          <p className="genre_text">{genre}</p>
          <button className="Xbtn"  onClick={() => unselectGenre(genre)} >X</button>
        </div>
      ))}
    </div>
  )}
</div>



      </div>
      <div className="right_cont">

       <div className="firstRow">
       <Widget imageSrc={images.img2} color="#FF5209" genre={"Action"} onClick={() => handleTileClick("Action")} selected={selectedGenre.includes("Action")}/>
        <Widget imageSrc={images.img3} color="#D7A4FF" genre={"Drama"} onClick={() => handleTileClick("Drama")} selected={selectedGenre.includes("Drama")}/>
        <Widget imageSrc={images.img4} color="#148A08" genre={"Romance"} onClick={() => handleTileClick("Romance")} selected={selectedGenre.includes("Romance")}/>
       </div>
       <div className="secondRow">
       <Widget imageSrc={images.img5} color="#84C2FF" genre={"Thriller"} onClick={() => handleTileClick("Thriller")} selected={selectedGenre.includes("Thriller")}/>
        <Widget imageSrc={images.img6} color="#902500" genre={"Western"} onClick={() => handleTileClick("Western")} selected={selectedGenre.includes("Western")}/>
        <Widget imageSrc={images.img7} color="#7358FF" genre={"Horror"} onClick={() => handleTileClick("Horror")} selected={selectedGenre.includes("Horror")}/>
       </div>
       <div className="ThirdRow">
       <Widget imageSrc={images.img8} color="#FF4ADE" genre={"Fantasy"} onClick={() => handleTileClick("Fantasy")} selected={selectedGenre.includes("Fantasy")} />
        <Widget imageSrc={images.img9} color="#E61E32" genre={"Music"} onClick={() => handleTileClick("Music")} selected={selectedGenre.includes("Music")}/>
        <Widget imageSrc={images.img10} color="#6CD061" genre={"Fiction"} onClick={() => handleTileClick("Fiction")} selected={selectedGenre.includes("Fiction")}/>
       </div>

       <button className="btn" >Next Page</button>

      </div>
    </div>
  );
}

export default Movies_tile_page;
