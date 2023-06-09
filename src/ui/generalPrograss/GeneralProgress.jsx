import { Box, linearProgressClasses, LinearProgress  } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import './GeneralProgress.css';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const GeneralProgress = ({display, item, step, text}) => {

  return (
    <div>
      <div className="prograss flex">
        <div className="prograssDiv flex">
          <div className="percentage" style={{display: display}}>{item}%</div>
          <div className="progressTitle">{text}</div>
          <div className="progressStep" style={{display: display}}>{step} step</div>
        </div>
        <div className='progressBar'>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={item} sx={{
            width: '334px',
            height: '5px',
            position: 'absolute',
            bottom: '30px',
            right: '38%'
          }} />
        </Box>
        </div>
      </div>
    </div>
  )
}

export default GeneralProgress
