import React from 'react'
import './Widget.scss'
import images from '../../imag_array/images'


function Widget({imageSrc,color,genre,onClick,selected}) {
  const widgetStyle = {
    backgroundColor: color,
  };
  if (selected) {
    // Change the border color if selected
    widgetStyle.outline = `5px solid #11B800 `;
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