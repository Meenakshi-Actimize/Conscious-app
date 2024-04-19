import React, { useState } from 'react';
import { Card, Grid, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradeIcon from '@mui/icons-material/Grade';

function MyComponent() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cardData = [
        { img1: './images/card3-1.jpg', img2: './images/card3-2.jpg',  img0:'./images/badge1.png', img3:'./images/badge2.png', name:'Almonds/Badaam', subname:'Organic | Premium quality | Omega 3-rich', Cost:'₹ 900', Discount:'₹765', cashback:'₹39 Cashback', rating:'4.4(63)'},
        { img1: './images/card3-3.jpg', img2: './images/card3-4.jpg' , img0:'./images/badge1.png', img3:'./images/badge2.png',  name:'Cheesy Pops', subname:' Gluten Free | Protein Rich | Premium quality', Cost:'₹ 210', Discount:'₹147'},
        { img1: './images/card3-5.jpg', img2: './images/card3-6.jpg' , img0:'./images/badge1.png', img3:'./images/badge2.png',  name:'Cashews / Kaju', subname:' Organic | Premium Quality | Healthy snack', Cost:'₹ 980', Discount:'₹ 833'},
        { img1: './images/card3-7.jpg', img2: './images/card3-8.jpg' , img0:'./images/badge1.png', img3:'./images/badge2.png',  name:'Wild Forest honey', subname:'Raw | Cruelty-free | Direct from Beekeeper', Cost:'₹ 480', Discount:'₹ 408'},
        { img1: './images/card3-9.jpg', img2: './images/card3-10.jpg' , img0:'./images/badge1.png', img3:'./images/badge2.png',  name:'Sunflower oil', subname:'Cold presssed | Organic | 100% pure | Edible', Cost:'₹ 2,350', Discount:'₹ 1,997'},
        { img1: './images/card3-14.jpg', img2: './images/card3-12.jpg', img0:'./images/badge1.png', img3:'./images/badge2.png',  name:'Raw sugar Khandsari', subname:'Unrefined | Natural | White sugar substitute', Cost:'₹ 99', Discount:'₹ 84'},
        { img1: './images/card3-16.jpg', img2: './images/card3-17.jpg', img0:'./images/badge1.png', img3:'./images/badge2.png', name:'Raw dal', subname:'Unrefined | Natural | White sugar substitute', Cost:'₹ 99', Discount:'₹ 84'},
        { img1: './images/card15.jpg', img2: './images/card16.jpg' , img0:'./images/badge1.png', img3:'./images/badge2.png', name:'Raw Saffron', subname:'Organic | Sourced from Kashmir | Premium quality', Cost:'₹ 450', Discount:'₹ 382'}
    ];

    const handleCardHover = (cardIndex) => {
        setHoveredCard(cardIndex);
    };

    return (
        <Grid container>
            {cardData.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                    <Card
                        sx={{
                            // width: '100%',
                            height: '400px', 
                            position: 'relative',
                            margin: '15px',
                            position: 'relative',
                            border: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center', 
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={() => handleCardHover(null)}
                    >
                        <Grid container>
                         <Grid item xs={3} sx={{justifyContent:'flex-start'}}>
                            <img src={item.img0} alt=""  style={{width:'40%', display: 'flex', alignItems: 'center'}} />
                        </Grid>

                        <Grid item xs={6}>
                        <img
                            src={hoveredCard === index ? item.img2 : item.img1}
                            alt="Image"
                            style={{ width: '200px', height: '200px', justifyContent: 'center', alignItems: 'center' }}
                        />
                        </Grid>
                        <Grid item xs={3}>
                        <img src={item.img3} alt="" width="40%" style={{paddingTop:'110px'}}/>

                        </Grid>
                        </Grid>
                        <Grid>
                        <Typography sx={{ textAlign:'start', color: '#73957C' }}>
                            <strong>{item.name}</strong>
                        </Typography>
                        <Typography sx={{ textAlign: 'start' , fontSize:'10px'}}>{item.subname}</Typography>
                        <Typography sx={{ textAlign: 'start' , color:'#73957C'}}><del>{item.Cost}</del> <span style={{color:'#242124'}}>{item.Discount}</span></Typography>
                        <Button  sx={{
                                backgroundColor:'#7A9352',
                                color:'white',
                                marginTop:'18px',
                                width: '200px',
                                fontSize:'16px',
                                height: '40px',
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                 borderRadius:'16px'
                            }}><ShoppingCartIcon />ADD</Button>
                        {/* <Typography>
                         {item.cashback} <span sx={{backgroundColor:'#7A9352', fontSize:'5px'}}><GradeIcon /></span>{item.rating}
                        </Typography> */}
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default MyComponent;
