import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress';
import gifWork from '../../Assent/gif/wired-outline-153-bar-chart-growth.gif'

const WorkingTwo = (props) => {
  return (
    <Box>
      <Container  maxWidth='lg'>
        <HorizontalLinearStepper item={'6'} />
        <Box maxWidth={'100%'} height={530} sx={{
          background: '#fff',
          borderRadius: '34px',
          boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.06)',
          border: '1px solid #EFF0F7',
          mt: '27px',
          textAlign: 'center'
        }}>
          <GeneralLogo />
          <img src={gifWork} alt="" width={'284px'} />
          <Typography variant='h4' sx={{fontWeight: 'bold', mt: '20px'}}>
          We Are Working on Now ! <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Your Creations</span>
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'
          }}>
            We Will Email You Once They are Ready!
          </Typography>
          <GeneralButton login='Next' display='none' link={'/photoPage'}/>
          <GeneralProgress 
            item='48' 
            text='Creations Under Process!' 
            step='7th' />
        </Box>
      </Container>
    </Box>
  )
}

export default WorkingTwo
