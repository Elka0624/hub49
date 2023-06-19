import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo';
import Input from '../../ui/input/Input';
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import './login.css';
import bntIcon from '../../Assent/btn-icon.png';
import GeneralButton from '../../ui/generalButton/GeneralButton';
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress';

const Login = () => {
  return (
    <Box>
      <Container maxWidth='lg' >
        <HorizontalLinearStepper item={'0'} />
        <Box maxWidth={'100%'} height={530} sx={{
          background: '#fff',
          borderRadius: '34px',
          boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.06)',
          border: '1px solid #EFF0F7',
          mt: '27px',
          textAlign: 'center'
        }}>
          <GeneralLogo />
          <Typography variant='h3' sx={{
            mt: '60px'
          }}>
            Welcome Back!
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'
          }}>
            Sign in To Get Started
          </Typography>
          <Input />
          <Typography variant='h4' sx={{fontWeight: 'bold', mt: '20px'}}>
            Start Your <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Work!</span>
          </Typography>
          <img src={bntIcon} alt="tvar" className='imgBtnIcon' />
          <GeneralButton login='login' display='none' />
          <GeneralProgress 
            display='none' 
            text='All Rights Reserved '
            item='0'/>
        </Box>
      </Container>
    </Box>
  )
}

export default Login
