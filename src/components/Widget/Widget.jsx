import React from 'react'
import './Widget.css'
import images from '../../imag_array/images'


function Widget({imageSrc,color,text}) {
  return (
    <div>
        <div className='movie_tile' style={{backgroundColor:color}}>
          <p className='text'>{text}</p>
            <img src={imageSrc}></img>

        </div>
    </div>
  )
}

export default Widget