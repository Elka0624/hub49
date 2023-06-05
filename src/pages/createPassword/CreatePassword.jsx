import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import Input from '../../ui/input/Input'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import bntIcon from '../../Assent/btn-icon.png';
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress'

const CreatePassword = () => {
  return (
    <Box>
      <Container>
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
            Create New <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Password!</span>
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'
          }}>
            Update Your Credentials Now!
          </Typography>
          <Input display='none' />
          <Input displayForgot='none' display='none'  />
          <Typography variant='h4' sx={{fontWeight: 'bold', mt: '20px'}}>
            Update Your <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Password!</span>
          </Typography>
          <img src={bntIcon} alt="tvar" className='imgBtnIcon' />
          <GeneralButton login='Update Password!' display='none' link='/recoveryLink' />
          <GeneralProgress display='none' />
        </Box>
      </Container>
    </Box>
  )
}

export default CreatePassword
