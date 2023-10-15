import React from 'react'
import './Entertain.scss'
import images from '../../imag_array/images'
import { useNavigate } from 'react-router-dom'
import MoviesApi from '../../components/moviesApi/movies_api';

function Entertain_page() {

  const navigate= useNavigate();
  const handleButtonClickToProfilePage=()=>{
    navigate('/profile');
  }
  return (
    <div className='entertainment-cont'>
      <div className='img_btn'>
      <h1>Super app</h1>
      <img src={images.img16} onClick={handleButtonClickToProfilePage}></img>
      </div>
      <MoviesApi/>

    </div>
  )
}

export default Entertain_page