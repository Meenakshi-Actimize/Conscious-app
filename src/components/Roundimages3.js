import * as React from 'react';
import { Grid, Typography } from '@mui/material';

function Roundimages3(){
    return(
        <>
        <Typography variant="h4" sx={{color:'#839B5E'}}><strong>EXPLORE MORE CATEGORIES</strong></Typography>

        <Grid item xs={3} sm={2} md={3} sx={{display:'inline-flex', paddingTop:'65px'}}>
        <Grid>
            <img src="./images/Round3-1.jpg" width="82%"/>

        </Grid>
        <Grid>
            <img src="./images/Round3-2.jpg" width="82%"/>

        </Grid>
        <Grid>
            <img src="./images/Round3-3.jpg" width="82%"/>

        </Grid>
        </Grid>
        
        </>
    )
}

export default Roundimages3;