import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress';
import gifWork from '../../Assent/gif/wired-outline-153-bar-chart-growth.gif'

const Working = (props) => {
  return (
    <Box>
      <Container  maxWidth='lg'>
        <HorizontalLinearStepper item={'3'} />
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
          We Sent You a <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Recovery Link</span>
          </Typography>
          <Typography variant='p' sx={{
            fontSize: '20px'
          }}>
            Check Your Email & Proceed From The Link We Sent
          </Typography>
          <GeneralButton login='Next' display='none' link={'/table'}/>
          <GeneralProgress 
            item='24' 
            text='Plan Under Process!' 
            step='4th' />
        </Box>
      </Container>
    </Box>
  )
}

export default Working
