import React from 'react';
import autoIcon from '../../Assent/carIcon.jpg';
import userIcon from '../../Assent/user.jpg';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './ImageUi.css';


const ImageUi = () => {
  return (
    <div>
      <img src={userIcon} alt="Elka" className='img' />
      <img src={autoIcon} alt="Elka" className='img2' />
      <button className='btnCamera'><PhotoCameraIcon sx={{fontSize: '30px', color: '#47B2FF'}} /></button>
      <button className='btnCamera2'><PhotoCameraIcon sx={{fontSize: '30px', color: '#47B2FF'}} /></button>
    </div>
  )
}

export default ImageUi

