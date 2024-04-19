import { Button, Grid, Avatar, Stack, Typography } from '@mui/material';
import * as React from 'react';

function Roundimages2comp() {
    const imageData = [
        { img: './images/round2-1.jpg', alt: 'Remy Sharp' },
        { img: './images/round2-2.jpg', alt: 'Travis Howard' },
        { img: './images/round2-3.jpg', alt: 'Cindy Baker' }
    ];

    const sidebarData = [
        { head: 'Chemical & pesticide free food', text: 'Our products are made from the highest quality natural ingredients, without any artificial colors, flavors, or preservatives' },
        { head: 'Ethical sourcing of premium ingredient', text: 'All our products are natural, whole and unrefined, & retain more nutrients than conventionally produced refined food.' },
        { head: 'Better for you, better for our planet', text: 'Our aim is to support small farmers and the farming communities that produce natural food.' }
    ];

    return (
        <>
            <Grid container direction="column" alignItems="center" sx={{ backgroundColor: '#F2E8D9', padding: '20px' }}>
                <Button
                    sx={{
                        backgroundColor: '#89622E',
                        color: 'white',
                        borderRadius: '26px',
                        // width: '80%',
                        fontSize: '25px',
                        marginTop: '40px',
                        width: { xs: '80%', sm: '30%', lg:'20%', md:'30%'}
                    }}
                >
                    <strong>WE BELIEVE IN</strong>
                </Button>

        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ padding: '30px 0' }}>
            {imageData.map((item, index) => (
                <Avatar
                    key={index}
                    alt={item.alt}
                    src={item.img}
                    sx={{
                        width: { xs: '20%', sm: '20%', lg:'20%', md:'10%'}, // Adjusted width for different screen sizes
                        height: 'auto',
                        padding: '5px'
                    }}
                />
            ))}
        </Stack>

                <Grid container justifyContent="center" >
                    {sidebarData.map((item, index) => (
                        <Grid key={index} item xs={12} sm={4} sx={{ backgroundColor: '#89622E', color: 'white', width: '80%', height: '160px', marginBottom: '18px', padding: '10px' }}>
                            <Typography variant="h6" sx={{ fontSize: '15px', textAlign: 'center', lineHeight: '1.5' }}>{item.head}</Typography>
                            <hr />
                            <Typography variant="body1" sx={{ fontSize: '12px', color: 'white', textAlign: 'center' }}>{item.text}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default Roundimages2comp;
