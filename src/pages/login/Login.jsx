import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo';
import Input from '../../ui/input/Input';
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import './login.css';

const Login = () => {
  return (
    <Box>
      <Container maxWidth='lg' >
        <HorizontalLinearStepper  />
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
        </Box>
      </Container>
    </Box>
  )
}

export default Login
