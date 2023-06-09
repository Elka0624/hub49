import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import GeneralLogo from '../../ui/generalLogo/GeneralLogo'
import HorizontalLinearStepper from '../../ui/stepper/Stepper'
import GeneralButton from '../../ui/generalButton/GeneralButton'
import GeneralProgress from '../../ui/generalPrograss/GeneralProgress'
import Table from '../../ui/table/Table';

const TablePage = () => {
  return (
    <Box>
      <Container>
        <HorizontalLinearStepper item={'4'}/>
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
            mt: '30px'
          }}>
            <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Congrats!</span> Our Experts Finalized Your Plan! <br />  <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Review</span> & Approve For The <span style={{color: '#47B2FF', fontWeight: 'bold'}}>Next Steps!</span>
          </Typography>
          <Table />
          <GeneralButton login='Approve Plan!' display='none' link='/congratsTwo' />
          <GeneralProgress 
            text='Approve Plan! '
            item='32' 
            step='5th'/>
        </Box>
      </Container>
    </Box>
  )
}

export default TablePage



