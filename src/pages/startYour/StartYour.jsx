import { Box, Typography, Container } from '@mui/material'
import React from 'react'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import flatGif from '../../Assent/gif/flat.gif'
import bntIcon from '../../Assent/btn-icon.png';
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress'

const StartYour = (props) => {
  return (
    <Box>
      <Container maxWidth='lg'>
        <HorizontalLinearStepper item='0' />
      <Box maxWidth={'100%'} height={530} sx={{
          background: '#fff',
          borderRadius: '34px',
          boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.06)',
          border: '1px solid #EFF0F7',
          mt: '27px',
          textAlign: 'center'
        }}>
          <GeneralLogo />
          <img src={flatGif} alt="" width={'100px'} />
          <Typography variant='h3' sx={{
            mt: '60px'
          }}>
            Heyy! Welcome to <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Jizzax 712</span>
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'}}>
            We Are Glad to Have You Onboard!
          </Typography>
          <Typography variant='h4' sx={{fontWeight: 'bold', mt: '20px'}}>
          Let’s <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Start</span> Your <br /> <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Full-Year Journey!</span>
          </Typography>
          <img src={bntIcon} alt="tvar" className='imgBtnIcon' />
          <GeneralButton login='Start Your Journey' display='none' link='/profileDetils' />
          <GeneralProgress item='0' step='0' text='All Rights Reserved'/>
        </Box>
      </Container>
    </Box>
  )
}

export default StartYour
