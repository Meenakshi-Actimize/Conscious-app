import * as React from'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';

function Banner2comp(){
    return(
        <>
            <Grid Conatiner sx={{paddingTop:'30px', paddingBottom:'25px'}}>
                <img src="./images/banner2.jpg" alt=""  style={{maxWidth:'100%', height:'auto'}}/>
            </Grid>
        </>
    )
}
export default Banner2comp;