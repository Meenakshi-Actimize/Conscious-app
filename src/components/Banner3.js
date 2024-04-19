import * as React from 'react';
import { Grid , Typography} from '@mui/material';

function Banner3comp(){
    return(
        <>
            <Grid sx={{marginTop:'35px', backgroundColor:'#F2E8D9'}}>

                <img src="./images/bannerbg.jpg" width="100%"/>

           

                <img src="./images/banner3.jpg" width="90%" style={{marginTop:'-168px'}}/>
                <Typography sx={{color:'#89622e', fontSize:'25px', padding:'2% 10% 2% 10%', lineHeight:'1.2'}}>
                <strong>Our misson is to provide a wholesome, clean label, chemical free and sustainable food choice for all our consumers, offering an alternative to chemically-processed and mass-produced foods.</strong>
                </Typography>

            </Grid>
        </>
    )
}
export default Banner3comp;