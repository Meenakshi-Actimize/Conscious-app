import * as React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


function RoundImages() {
    const imageData = [{ img: './images/roundimg1.jpg', alt: 'Remy Sharp', name: 'Recyclable Packaging' }, { img: './images/roundimg2.jpg', alt: 'Travis Howard', name: 'Sourced Locally' }, { img: './images/roundimg3.jpg', alt: 'Cindy Baker', name: '80% Women Workforce' }, { img: './images/roundimg4.jpg', alt: 'Cindy Baker', name: 'Cruelty Free' }]

    return (
        <>
            <Grid>
                <Box sx={{ color: '#839B5E' }}>
                    <Typography sx={{ fontSize: { xs: '10px', sm: '40px' } }}> SHOP TO MAKE A DIFFERENCE</Typography>
                </Box>
                <Grid direction={'row'}>
                    <Stack direction={'row'} spacing={2} justifyContent="center" alignItems="center" sx={{ padding: '30px 30px 30px 30px' }}>

                        {imageData.map((item) => (
                            <>
                                <Grid>
                                    <Avatar alt={item.alt} src={item.img} sx={{ width: { xs: '90%', sm: '80%' }, height: { xs: '30%', sm: '20%' } }} />
                                    {/* <Typography sx={{ fontSize: { xs: '10px', md: '24px' }, color: '#839B5E', paddingTop: '10px' }}><strong>{item.name}</strong></Typography> */}
                                </Grid>
                            </>




                        ))}
                    </Stack>

                </Grid>

            </Grid>
        </>
    )
}
export default RoundImages;