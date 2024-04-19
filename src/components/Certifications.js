import * as React from 'react';
import { Grid, Typography } from '@mui/material';

function Certifications(){
    return(
        <>
        <Typography variant="h4" sx={{color: '#839B5E', marginTop:'25px'}}><strong>OUR CERTIFICATIONS</strong></Typography>
        <Grid sx={{display:'inline-flex', marginTop:'25px', padding:'0px 55px 0px 55px'}}>
        <Grid>
            <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/logo_india_organic.png?v=1653903985" alt="" width="80%" />
        </Grid>
        <Grid>
            <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/NOP-ECOCERT-logo.png?v=1700733849" alt=""  width="80%" />
        </Grid>
        <Grid>
            <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/logo_jaivik_bharat.png?v=1653903984" alt="" width="80%" />
        </Grid>
        <Grid>
            <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/logo_usda.png?v=1653903985" alt="" width="80%" />
        </Grid>
        <Grid>
            <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/logo_haccp.png?v=1653903985" alt=""  width="80%" />
        </Grid>
        <Grid>
            <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/logo_noca.png?v=1653903985" alt="" width="80%" />
        </Grid>
    </Grid>
        </>
    )
}
export default Certifications;