import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import AutoDetailsUi from '../../ui/autoDetailsUi/AutoDetailsUi'
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress'
import ImageUi from '../../ui/imageUi/ImageUi'
import ProfileDetailsUi from '../../ui/profileeDetails/ProfileDetailsUi'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'

const ProfileDetails = () => {
  return (
    <div>
      <Box>
        <Container maxWidth='lg'>
          <HorizontalLinearStepper item={'1'}/>
          <Box maxWidth={'100%'} height={530} sx={{
            background: '#fff',
            borderRadius: '34px',
            boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.06)',
            border: '1px solid #EFF0F7',
            mt: '27px',
            textAlign: 'center'
          }}>
            <GeneralLogo />
            <Typography variant='h4' mt={5}>
              Fill Out Your <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Profile Details</span> For The <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Next Steps!</span>
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <ProfileDetailsUi />
              <ImageUi />
              <AutoDetailsUi />
            </Box>  
          <GeneralButton login='Next step' display='none' link='/profileDetils' />
          <GeneralProgress item='8' step='2nd' text='Fill Your Details!'/>
        </Box>
        </Container>
      </Box>
    </div>
  )
}

export default ProfileDetails
