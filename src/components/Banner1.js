import * as React from 'react';
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function Banner1comp(){
    return(
        <>
            <Grid sx={{marginTop:'35px', padding:'0px 7px 0px 7px'}}>
                <img src="./images/banner1.jpg" alt="" width="100%"/>
                <Box sx={{backgroundColor:'#7A9352', marginTop:'-26px', color:'white'}}>
                <img src="./images/Screenshot 2024-04-05 111139.png" alt="" width="100%"/>

                </Box>
            </Grid>
            
        </>
    )
}
export default Banner1comp;