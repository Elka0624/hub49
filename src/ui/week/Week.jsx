import * as React from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './Week.css'

export default function Week() {
  return (
    <FormControl sx={{
      width: '274px', 
      boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.08)',
      borderRadius: '20px',
      p: '18px 1px'
      }}>
    <FormLabel id="demo-radio-buttons-group-label">Which Day of The Week ?</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      sx={{textAlign: 'center', m: '0 auto'}}
    >
      <FormControlLabel value="Monday" control={<Radio size="small" />} label="Monday" />
      <FormControlLabel value="Tuesday" control={<Radio size="small" />} label="Tuesday" />
      <FormControlLabel value="Wednesday" control={<Radio size="small" />} label="Wednesday" />
      <FormControlLabel value="Thursday" control={<Radio size="small" />} label="Thursday" />
      <FormControlLabel value="Friday" control={<Radio size="small" />} label="Friday" />
      <FormControlLabel value="Saturday" control={<Radio size="small" />} label="Saturday" />
      <FormControlLabel value="Sunday" control={<Radio size="small" />} label="Sunday" />
    </RadioGroup>
    <FormLabel id="demo-radio-buttons-group-label">Which Day of The Week ?</FormLabel>
    <div className="hour flex">
      <input type="text" defaultValue={'10'} className='hourInput' /> 
      <p>:</p>
      <input type="text" defaultValue={'10'} className='hourInput' />
      <input type="text" defaultValue={'PM'} className='hourInput' />
    </div>
  </FormControl>
  );
}