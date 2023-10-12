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
    <div>
      <div className='img_btn'>
      <img src={images.img16} onClick={handleButtonClickToProfilePage}></img>

      </div>
      <MoviesApi/>

    </div>
  )
}

export default Entertain_page