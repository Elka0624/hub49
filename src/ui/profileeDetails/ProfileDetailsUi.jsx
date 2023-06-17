import { Box, Typography, TextField, Container } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

const ProfileDetailsUi = () => {
  return (
    <Box maxWidth={'400px'} mt={5}>
      <Container maxWidth='lg'>
        <Typography variant='h5' sx={{mb: '5px'}}>
          Your Profile Information
        </Typography>
        <Typography variant='p' sx={{color: '#6F6C90'}}>
          Lorem ipsum dolor sit amet consectetur adipisc.
        </Typography>
        <Box mt={2} sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} maxWidth={'150px'}>
            <PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Name" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}  maxWidth={'150px'}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: '30px' }}  maxWidth={'150px'}>
            <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Country" variant="standard" />
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

export default ProfileDetailsUi
