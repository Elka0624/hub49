import { Box } from '@mui/material'
import React from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './generalLogo.css'

const GeneralLogo = () => {
  return (
    <div className='logoDiv flex'>
      <DirectionsCarIcon sx={{mb: '10px', fontSize: '30px', color: 'white'}}/>
      <h2 className='logoDivH2'>Jizzax 712</h2>
    </div>
  )
}

export default GeneralLogo
