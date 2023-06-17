import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import './RecoveryLink.css'
import flatGif from '../../Assent/gif/flat.gif'
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress';


const RecoveryLink = () => {
  return (
    <Box>
      <Container  maxWidth='lg'>
        <HorizontalLinearStepper />
        <Box maxWidth={'100%'} height={530} sx={{
          background: '#fff',
          borderRadius: '34px',
          boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.06)',
          border: '1px solid #EFF0F7',
          mt: '27px',
          textAlign: 'center'
        }}>
          <GeneralLogo />
          <img src={flatGif} alt="" width={'284px'} />
          <Typography variant='h4' sx={{fontWeight: 'bold', mt: '20px'}}>
          We Sent You a <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Recovery Link</span>
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'
          }}>
            Check Your Email & Proceed From The Link We Sent
          </Typography>
          <GeneralButton login='Start' display='none' link={'/startYour'}/>
          <GeneralProgress display='none' item='0' step='0' text='' />
        </Box>
      </Container>
    </Box>
  )
}

export default RecoveryLink
