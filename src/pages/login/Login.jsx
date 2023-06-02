import { Container } from '@mui/material'
import React from 'react'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import './login.css';

const Login = () => {
  return (
    <>
      <Container maxWidth='lg' sx={{background: 'red'}}>
        <HorizontalLinearStepper  />
      </Container>
    </>
  )
}

export default Login
