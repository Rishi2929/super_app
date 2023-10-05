import React from 'react'
import './Widget.css'
import images from '../../imag_array/images'


function Widget({imageSrc,color,genre,onClick,selected}) {
  const widgetStyle = {
    backgroundColor: color,
    border: selected ? '5px transparent #11B800' : 'none', 
  };
  if (selected) {
    // Change the border color if selected
    widgetStyle.border = `5px solid #11B800 `;
  }
  return (
    <div>
        <div className='movie_tile' style={widgetStyle} onClick={onClick}>
          <p className='text'>{genre}</p>
            <img src={imageSrc}></img>

        </div>
    </div>
  )
}

export default Widget