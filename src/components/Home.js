import React from 'react';
import { Grid,Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Homebanner = () => {
  return (
   <Grid container maxWidth="xs-lg" 
   sx={{ 
    justifyContent: "center" ,
    backgroundColor:'#e6ee9c',
    color: "rgb(0,0.3,0.3,0.7)",
    fontSize: '13px',
    height:'40px',
    padding:'12px',
    fontFamily:'inherit',
    
    
    }}>
        <Typography sx={{color:'#000000', fontSize:'13px',  '&:hover':{color:'#ab47bc'}}}>FREE SHIPPING ON ORDERS ABOVE ₹ 499</Typography>

      </Grid>

  );
};

export default Homebanner;
