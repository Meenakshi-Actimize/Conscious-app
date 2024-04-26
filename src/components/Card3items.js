import { Typography } from '@mui/material';
import * as React from 'react';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import MyComponent from './Card32items'
function Card3items() {
    return (
        <>
             <Grid sx={{ 
                position:'absolute',
                left:'-6.5rem',
                
                zIndex:1,
                width:'30%',
                maxWidth:'25%' }}>
                <img src="./images/card2-1.png" />
            </Grid>
            <Grid sx={{
                position:'absolute',
                right:0,
                width:'9%',
                zIndex:3,
                // maxWidth:'25%',
                overflow:'hidden'  }}>
                <img src="./images/card2-2.jpg" />
            </Grid>
            <Typography variant="h6" color="#839B5E" sx={{marginTop:'65px'}}><strong>FEATURED PRODUCTS</strong></Typography>
            <MyComponent />


            <Grid>
            <Button variant="contained"  sx={{backgroundColor:'black', color:'white', margintop:'25px'}}>View all</Button>
            </Grid>








        </>
    )
}

export default Card3items;