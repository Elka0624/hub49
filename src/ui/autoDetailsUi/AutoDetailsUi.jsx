import { Box, Typography, TextField, Container } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinIcon from '@mui/icons-material/Pin';
import React from 'react'

const AutoDetailsUi = () => {
  return (
    <Box maxWidth={'400px'} mt={5}>
      <Container maxWidth='lg'>
        <Typography variant='h5' sx={{mb: '5px'}}>
          Auto Information
        </Typography>
        <Typography variant='p' sx={{color: '#6F6C90'}}>
          Lorem ipsum dolor sit amet consectetur adipisc.
        </Typography>
        <Box mt={2} sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} maxWidth={'150px'}>
            <PinIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Auto Number" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}  maxWidth={'150px'}>
            <ContactEmergencyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Driver's License" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: '30px' }}  maxWidth={'150px'}>
            <InstagramIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Instagram" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: '30px' }}  maxWidth={'150px'}>
            <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Phone Number" variant="standard" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AutoDetailsUi
