import * as React from 'react';
import { Card, CardActions, Grid, Box , useMediaQuery, useTheme} from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';



function Card22items() {
   
    const imzz = [{ img: './images/card1-1.jpg', data: 'GHEE & OILS' }, { img: './images/card1-2.jpg', data: 'SUGAR & HONEY' }]
    const imzz2 = [{ img: './images/card1-3.jpg', data: 'PULSES' }, { img: './images/card1-4.jpg', data: 'GRAINS & CEREALS' }, { img: './images/card1-5.jpg', data: 'SPICES' }, { img: './images/card1-6.jpg', data: 'FLOURS' }]
    const imzz3 = [{ img: './images/card1-7.jpg', data: 'DRY FRUITS' }, { img: './images/card1-8.jpg', data: 'SUPERFOODS' }, { img: './images/card1-9.jpg', data: 'SNACKS' }, { img: './images/card1-10.jpg', data: 'READY TO COOK' }]
    const imzz4 = [{ img: './images/card1-11.jpg', data: 'GIFTING' }, { img: './images/card1-12.jpg', data: 'KIDS FOOD' }, { img: './images/card1-13.jpg', data: 'MILLETS' }]


    return (
    <>
            {/* Grid1 */}
            {/* <Grid sx={{ width: '15%', display: 'inline-flex' }}>

                </Grid> */}



            <Box>
                <Grid container >
                    <Grid  sx={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        {imzz.map((item) => (
                            <Card sx={{ width: { xs: '45%', sm: '20%', md: '18%', lg: '15%' }, height: { xs: '190px', sm: '200px', md: '250px', lg: '280px' }, margin: '0 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', position: 'relative' }}>
                                <img src={item.img} alt="" style={{ width: '70%', height: {xs:'50px'}}} />
                                <Button variant="contained" sx={{ borderRadius: '18px', backgroundColor: '#7A9352', width: '100%', height: '30px', position: 'absolute', bottom: '0px', fontSize: '10px' }}>
                                    <strong>{item.data}</strong>
                                </Button>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Box>


            {/* <Grid sx={{ width: '30%', display: 'inline-flex' }}>
                </Grid> */}

            {/* Grid2 */}
            {/* 
                <Grid sx={{ width: '13%', display: 'inline-flex' }}>
                </Grid> */}
            <Box>
                <Grid container sx={{justifyContent:'center', alignItems:'center'}}>
                    <Grid sx={{ width: {xs:'90%', md:'80%', lg:'65%'} , display: 'flex', marginBottom: '20px' }}>
                        {imzz2.map((item) => (
                            <Card  
                                sx={{
                                    borderRadius: '14px',
                                    // width: '40%',
                                    // height: '250px',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: {lg:'15px', md:'15px',sm:'15px'},
                                    width: { xs: '70%', sm: '50%', md: '40%', lg: '25%' }, height: { xs: '130px', sm: '220px', md: '250px', lg: '280px' }

                                }}
                            >
                                <img src={item.img} style={{width: '70%', height: {xs:'80px'}}} />
                                <Button variant="contained" sx={{ borderRadius: '18px', backgroundColor: '#7A9352', width: '100%', height: '40px', marginTop: '20px', bottom: '0px', position: 'absolute', fontSize: {lg:'10px',md:'10px',sm:'10px',xs:'8px'} }}><strong>{item.data}</strong></Button>
                                

                            </Card>

                        ))}

                    </Grid>
                </Grid>
            </Box>
            {/* <Grid sx={{ width: '13%', display: 'inline-flex' }}>
                </Grid> */}

            {/* Grid3 */}


            {/* <Grid sx={{ width: '13%', display: 'inline-flex' }}>
                </Grid> */}
            <Box>
                <Grid container sx={{justifyContent:'center', alignItems:'center'}}>
                    <Grid sx={{width: {xs:'90%', md:'80%', lg:'65%'}, display: 'inline-flex', marginBottom: '20px'  }}>
                        {imzz3.map((item) => (
                           
                            <Card spacing={2}
                                sx={{
                                    borderRadius: '14px',
                                    // width: '40%',
                                    // height: '250px',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: {lg:'15px', md:'15px',sm:'15px'},
                                    width: { xs: '70%', sm: '50%', md: '40%', lg: '25%' }, height: { xs: '130px', sm: '220px', md: '250px', lg: '280px' }

                                }}
                            >
                                <img src={item.img} style={{width: '70%', height: {xs:'60px'}}} />
                                <Button variant="contained" sx={{ borderRadius: '18px', backgroundColor: '#7A9352', width: '100%', height: '40px', marginTop: '20px', bottom: '0px', position: 'absolute', fontSize: {lg:'10px',md:'10px',sm:'10px',xs:'8px'} }}><strong>{item.data}</strong></Button>

                            </Card>
                          

                        ))}

                    </Grid>
                </Grid>
            </Box>
            {/* <Grid sx={{ width: '13%', display: 'inline-flex' }}>
                </Grid> */}



            {/* Grid4 */}

            {/* <Grid sx={{ width: '22%', display: 'inline-flex' }}>
                </Grid> */}
            <Box>
                <Grid container sx={{justifyContent:'center', alignItems:'center'}}>
                    <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '40px' }}>
                        {imzz4.map((item, index) => (
                            <Card key={index} sx={{
                                width: { xs: '40%', sm: '20%', md: '18%', lg: '15%' },
                                height: { xs: '150px', md: '250px', sm: '230px' },
                                margin: '0 10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '14px',
                                position: 'relative'
                            }}>
                                <img src={item.img} alt="" style={{ width: '70%', height: {xs:'60px'}}} />
                                <Button variant="contained" sx={{ borderRadius: '18px', backgroundColor: '#7A9352', width: '100%', height: '40px', marginTop: '20px', bottom: '0px', position: 'absolute', fontSize: '10px' }}>
                                    <strong>{item.data}</strong>
                                </Button>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Box>





    </>
    )
}
export default Card22items;