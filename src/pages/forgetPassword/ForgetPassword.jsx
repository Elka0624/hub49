import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress'
import Input from '../../ui/input/Input'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import './ForgetPassword.css'
import bntIcon from '../../Assent/btn-icon.png';
const ForgetPassword = () => {
  return (
    <Box>
      <Container maxWidth='lg'>
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
          <Typography variant='h3' sx={{
            mt: '60px'
          }}>
            Forgot Password ?
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'
          }}>
            Enter Your Email
          </Typography>
          <Input display='none' mt='50px' />
          <Typography variant='h4' sx={{fontWeight: 'bold', mt: '20px'}}>
          We Will Email You A <br /> <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Reset Password Link</span>
          </Typography>
          <img src={bntIcon} alt="tvar" className='imgBtnIcon' />
          <GeneralButton login='Reset' display='none' link='/createPassword' />
          <GeneralProgress display='none' />
        </Box>
      </Container>
    </Box>
  )
}

export default ForgetPassword
