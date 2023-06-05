
import React from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './generalButton.css'
import { Link } from 'react-router-dom';

const GeneralButton = ({login, display, link}) => {
  return (
    <Link to={link}>
      <button className='buttonDiv flex'>
        <DirectionsCarIcon sx={{mb: '10px', fontSize: '30px', color: 'white', display: {display}}}/>
        <h2 className='ButtonDivH2'>{login}</h2>
      </button>
    </Link>
  )
}

export default GeneralButton
