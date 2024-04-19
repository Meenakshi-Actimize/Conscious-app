import * as React from 'react';
import { Grid, Typography, Box, Card } from '@mui/material';

function Available(){
    return(
        <>
        <Grid container alignItems="center" sx={{display:'inline-flex'}}>
            <Grid item xs={1}></Grid>
            {/* <Grid item xs={2}>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/farmer.png?v=1708341906" alt="" width="80%" style={{marginTop:'90px', marginLeft:'120px'}}/>
            </Grid> */}
            <Grid item xs={10}>
                <Typography variant="h4" sx={{color:'#839B5E', marginTop:'35px'}}><strong>AVAILABLE AT</strong></Typography>
            </Grid>
            {/* <Grid item xs={2}>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/grass.png?v=1708341905" alt="" width="50%" style={{marginTop:'150px', marginRight:'95px'}}/>
            </Grid> */}
            <Grid item xs={1}></Grid>
        </Grid>
        <Box sx={{border:'1px solid #ede7f6', boxShadow:'fade', borderRadius:'28px', maxWidth: '80%', height:'190px',
        margin: 'auto',
        textAlign: 'center'}}>
            <Grid sx={{display:'inline-flex', paddingTop:'25px'}}>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/swiggy.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/big_basket.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/amazon.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/zepto.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/lulu.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/tata_cliq.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/flipkart.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/le_marche.jpg?v=1686639847" alt=""  width="50%"/>
            </Grid>
            </Grid>
            <Grid sx={{display:'inline-flex', paddingTop:'10px', paddingBottom:'25px'}}>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/reliance.jpg?v=1686639847" alt=""  width="40%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/nature_s_basket.jpg?v=1686639847" alt=""  width="40%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/dorabjee.jpg?v=1686639847" alt=""  width="40%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/haiko.jpg?v=1686639847" alt=""  width="40%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/blinkit.jpg?v=1686639847" alt=""  width="40%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/jiomart.jpg?v=1686639847" alt=""  width="40%"/>
            </Grid>
            <Grid>
                <img src="https://cdn.shopify.com/s/files/1/0489/5028/0356/files/more_retail.jpg?v=1686639847" alt=""  width="40%"/>
            </Grid>
            
            </Grid>
        </Box>
        </>
    );
}

export default Available;
