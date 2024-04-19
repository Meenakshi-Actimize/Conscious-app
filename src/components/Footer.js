import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { InputAdornment, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Footercomp() {
    return (
        <>


            {/* <Grid sx={{backgroundColor:'#E3F2D4', marginTop:'25px'}}>
                <img src="./images/Screenshot 2024-04-18 104614.png" alt="" width="100%"/>
            </Grid>

            <Grid sx={{backgroundColor:'#E3F2D4'}}>
                <img src="./images/Screenshot 2024-04-18 104646.png" alt="" width="100%"/>
                <Typography sx={{color:'black', textAlign:'start', fontSize:'10px', padding:'15px 80px 0px 0px'}}>© 2024, Conscious Food Pvt Ltd Powered by Shopify</Typography>
            </Grid> */}

            <Box sx={{ width: '100%', height: '100%', backgroundColor: '#E3F2D4', marginTop: '25px' }}>
                <Grid container spacing={1} sx={{ paddingTop: '25px' }}>
                    <Grid item xs={12} sm={6} md={3}><Typography sx={{fontSize:'22px', color:'gray',paddingBottom:'20px'}}><strong>ABOUT US</strong></Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>About</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Press</Typography></Grid>
                    <Grid item xs={12} sm={6} md={3}><Typography sx={{fontSize:'22px', color:'gray', paddingBottom:'20px'}}><strong>BUSINESS</strong></Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Colloborations</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Sourcing</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Export</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Careers</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Media</Typography></Grid>
                    <Grid item xs={12} sm={6} md={3}><Typography sx={{fontSize:'22px', color:'gray', paddingBottom:'20px'}}><strong>SUPPORT</strong></Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Contact Us</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Shipping & Returns</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>FAQS</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Terms & Conditions</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Mobile: +91 9967166755</Typography>
                        <Typography sx={{fontSize:'18px', paddingBottom:'15px'}}>Landline: +91 2246081126</Typography></Grid>
                    <Grid item xs={12} sm={6} md={3}><img src='https://www.consciousfood.com/cdn/shop/files/vertical_logo_black.png?v=1707890148&width=1100' alt="" width="40%" /><Typography>CONSCIOUS FOOD PVT LTD</Typography>
                        <Typography sx={{fontSize:'12px'}}>PLOT NO 7, UNIT NO 2, MAROL INDUSTRIAL ESTATE, LOK BHARATI ROAD, OFF A K ROAD, Andheri East, Mumbai, Mumbai Suburban, Maharashtra, 400059</Typography></Grid>
                </Grid>
            </Box>
            <Box>
                <Grid sx={{ backgroundColor: '#E3F2D4', paddingLeft:'15px'}}>
                    <Typography sx={{fontSize:'22px', textAlign:'start', color:'gray' , paddingTop:'40px'}}>Subscribe to our emails</Typography>
                    <Typography sx={{ marginTop:'10px', textAlign:'start'}}><TextField sx={{backgroundColor:'white'}}
                        label="Email"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <ArrowForwardIcon />
                                </InputAdornment>
                            ),
                        }}
                    /></Typography>
                </Grid>
                <Grid sx={{backgroundColor:'#E3F2D4'}}>
                    <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/footer_desktop-8.png?v=1705052397" alt="" width="100%" />
                    <Typography sx={{color:'black', fontSize:'10px', padding:'15px 25px 0px 0px'}}>© 2024, Conscious Food Pvt Ltd Powered by Shopify</Typography>
                </Grid>
            </Box>

        </>
    )
}

export default Footercomp;
