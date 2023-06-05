import React from 'react';
import { useState }  from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box } from '@mui/material';
import { VisibilityOff, Visibility  } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Input = ({display, displayForgot}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }


  return (
    <div>
      <Box sx={{
        width: '240px',
        display: 'flex',
        flexDirection: 'column',
        ml: '460px',
        mt: '20px',
      }}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size='small' sx={{display: displayForgot}}>Email</InputLabel>
          <OutlinedInput
          sx={{display: displayForgot}}
            id="outlined-adornment-password"
            type={'email'}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size='small' sx={{display: {display}}}>Password</InputLabel>
          <OutlinedInput
          sx={{display: {display}}}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <Link to={'/forgetPassword'} style={{ textDecoration: 'none', color: '#47B2FF', textAlign: 'left', display: display,}}>
            Forgot Password?
          </Link>
        </FormControl>
      </Box> 
    </div>
  )
}

export default Input
