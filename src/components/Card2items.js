import * as React from 'react';
import { Card, CardActions, Grid, Hidden } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import Card22items from './Card22items';
import { Container } from '@mui/material';




function Card2items() {

   
    return (
        <>



            <Grid  sx={{ margin: '35px 0px 35px 0px', backgroundColor: '#E3F2D4' }}>
                <Typography variant="h5" color="#839B5E" sx={{padding:'20px 0px 20px 0px'}}><strong>SHOP</strong></Typography>

                <Grid sx={{
                    position: 'absolute',
                    left: '-3rem',
                    marginTop: '20px',
                    // zIndex: 1,
                    width: '10%',
                    // maxWidth: '25%'
                }}>
                    <img src="./images/coconut_tree_left-8.png" />
                </Grid>

                <Card22items />

                
                <Grid sx={{
                    position: 'absolute',
                    // right:'-3rem',
                    right:0,
                    marginTop: '-25%',
                    overflow: 'hidden',
                    // marginBottom: '20px',

                    // zIndex: 1,
                    width: '10%',
                    // maxWidth: '25%'
                }}>
                    <img src="./images/white_coconut_tree.jpg" />
                </Grid>

            

            </Grid>






        </>
    )
}
export default Card2items;