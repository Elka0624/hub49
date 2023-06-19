import { Box, Typography, Container } from '@mui/material'
import React from 'react'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import flatGif from '../../Assent/gif/flat.gif'
import bntIcon from '../../Assent/btn-icon.png';
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress'

const Congrats = (props) => {
  return (
    <Box>
      <Container maxWidth='lg'>
        <HorizontalLinearStepper item='2' />
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
            Congrats
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'}}>
            You have Submitted All Your Profile Details & All Needed Information
          </Typography>
          <Typography variant='h4' sx={{fontWeight: 'bold', mt: '20px'}}>
          Let Us Work on <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Your Plan</span> Now !
          </Typography>
          <img src={bntIcon} alt="tvar" className='imgBtnIcon' />
          <GeneralButton login='Order Your Plan Now !' display='none' link='/congrats' />
          <GeneralProgress item='16' step='3rd' text='Order Your Plan' />
        </Box>
      </Container>
    </Box>
  )
}

export default Congrats


