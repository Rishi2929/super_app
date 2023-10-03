import React from "react";
import "./movies_tile_page.css";
import Widget from "../../components/Widget/Widget";
import images from "../../imag_array/images";

function Movies_tile_page() {
  return (
    <div className="tile">
      <div className="left_cont">
        <h1 className="left_header">Super app</h1>
        <h1 className="left_bottom_header">Choose your <br/>entertainment<br/> category </h1>
      </div>
      <div className="right_cont">

       <div className="firstRow">
       <Widget imageSrc={images.img2} color="#FF5209" text={"Action"} />
        <Widget imageSrc={images.img3} color="#D7A4FF" text={"Drama"}  />
        <Widget imageSrc={images.img4} color="#148A08" text={"Romance"} />
       </div>
       <div className="secondRow">
       <Widget imageSrc={images.img5} color="#84C2FF" text={"Thriller"} />
        <Widget imageSrc={images.img6} color="#902500" text={"Western"} />
        <Widget imageSrc={images.img7} color="#7358FF" text={"Horror"}/>
       </div>
       <div className="ThirdRow">
       <Widget imageSrc={images.img8} color="#FF4ADE" text={"Fantasy"}  />
        <Widget imageSrc={images.img9} color="#E61E32" text={"Music"} />
        <Widget imageSrc={images.img10} color="#6CD061" text={"Fiction"} />
       </div>

       <button>Next Page</button>

      </div>
    </div>
  );
}

export default Movies_tile_page;
