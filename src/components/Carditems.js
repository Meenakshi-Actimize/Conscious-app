import * as React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  


function Carditems(){
    const imagesss = [{img:'./images/card1.jpg'}, {img:'./images/card2.jpg'}, {img:'./images/card3.jpg'}, {img:'./images/card4.jpg'}]
    return(

        // <Box >
        //     {imagesss.map((item) =>(
        //             
                    

        //     ))}
       
        
        // </Box>
        // <Box>
        <Grid sx={{display:'inline-flex', margin:'25px 8px 0px 8px'}} spacing={2} columns={16}  >
            {imagesss.map((image) => (
                    <Grid  item xs={4} >
                         <Box
                            sx={{
                            margin:'0px 5px 0px 5px'
                            }}
                            >
                       <img src={image.img} alt="" width="100%" height="100%" style={{borderRadius:'15px'}}/>
                       </Box>
                    </Grid>            
            )
            )}
        </Grid>
        // </Box>


    )
}
export default Carditems;