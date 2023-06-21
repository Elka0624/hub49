import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress'
import Week from '../../ui/week/Week'

const Published = () => {
  return (
    <Box>
      <Container>
        <HorizontalLinearStepper item={'9'}/>
        <Box maxWidth={'100%'} height={530} sx={{
          background: '#fff',
          borderRadius: '34px',
          boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.06)',
          border: '1px solid #EFF0F7',
          mt: '27px',
          textAlign: 'center'
        }}>
          <GeneralLogo />
          <Typography variant='h4' sx={{
            mt: '10px'
          }}>
            Congrats! Our Experts Finalized Your Plan!
          </Typography>
          <Box sx={{
            width: '93%',
            m: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: '10px'
          }}>
            <Week />
            <Week />
            <Week />
          </Box>
          <GeneralButton login='Approve Plan!' display='none' link='/' />
          <GeneralProgress 
            text='Setup Posting Time! '
            item='72' 
            step='9th'/>
        </Box>
      </Container>
    </Box>
  )
}

export default Published
