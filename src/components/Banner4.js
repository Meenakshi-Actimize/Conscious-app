import * as React from'react';
import { Grid, Typography } from '@mui/material'


function Banner4comp(){
    return(
        <>
       
        <Grid>
            <Grid item sx={{zindex:0, position:'absolute',marginLeft:'-150px', marginTop:'-40px'}}>
                <img src="./images/Banner4side.png" alt="" />
            </Grid>
            <Typography variant="h4" sx={{color:'#839B5E', marginTop:'30px'}}><strong>DELIVERY TIMELINE</strong></Typography>
           
            <img src="./images/Banner4.png" alt="name" width="100%" style={{marginTop:'20px'}}/>
            {/* <Grid item sx={{zindex:0, position:'absolute',marginLeft:'-150px', marginTop:'-55px'}}>
                <img src="./images/Banner4side.png" alt="" />
            </Grid> */}
        </Grid>
        
        </>
    )
}
export default Banner4comp;