import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';

function VideoComponent() {
    return (
        <Grid container spacing={2} sx={{padding:'55px 55px 55px 55px'}}>
            <Grid item xs={12} sm={6} md={3} >
                <Card sx={{ maxWidth: 295 }}>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{ width: '100%', height: 'auto' }}
                        >
                            <source
                                src="https://cdn.shopify.com/videos/c/o/v/effdba3c537d4d05824048a9d72f5ed4.mp4"
                                type="video/mp4"
                            />
                        </video>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 295 }}>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{ width: '100%', height: 'auto' }}
                        >
                            <source
                                src="https://cdn.shopify.com/videos/c/o/v/990bd92098f64f69bf791d6a9fdcdcd3.mp4"
                                type="video/mp4"
                            />
                        </video>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 295 }}>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{ width: '100%', height: 'auto' }}
                        >
                            <source
                                src="https://cdn.shopify.com/videos/c/o/v/5e2338fc4ad24f1390757d099bff5aeb.mp4"
                                type="video/mp4"
                            />
                        </video>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
                <Card sx={{ maxWidth: 295 }}>
                        <video
                            autoPlay
                            loop
                            muted
                            style={{ width: '100%', height: 'auto' }}
                        >
                            <source
                                src="https://cdn.shopify.com/videos/c/o/v/2bb9c2eab614490690d9a3d762cb1a1c.mp4"
                                type="video/mp4"
                            />
                        </video>
                </Card>
                {/* Image wrapped in a Grid item */}
                {/* <img
                    src="./images/honey_comb.jpg"
                    alt="Honey Comb"
                    style={{
                        width: '100%',
                        position: 'absolute',
                        top: 20, // 20px from top
                        right: 20, // 20px from right
                    }}
                /> */}
            </Grid>
        </Grid>
    );
}

export default VideoComponent;
