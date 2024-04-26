import * as React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { GetCardsData } from '../redux/apis/api';
import { GetCardData } from '../redux/actions/actions';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function Carditems({ data, GetCardData }) {
    useEffect(() => {
      // Define an async function inside useEffect
      const fetchData = async () => {
        try {
          // Call the async function to fetch data
          const gettingApiData = await GetCardsData();
          // Dispatch the fetched data using GetCardData
          GetCardData(gettingApiData);
          console.log('Hi success', gettingApiData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      // Call the async function
      fetchData();
    }, []); // Empty dependency array means this effect runs only once on mount
  
    // Rest of your component code
  
  


 
    // const imagesss = [{img:'./images/card1.jpg'}, {img:'./images/card2.jpg'}, {img:'./images/card3.jpg'}, {img:'./images/card4.jpg'}]
    return(

        // <Box >
        //     {imagesss.map((item) =>(
        //             
                    

        //     ))}
       
        
        // </Box>
        // <Box>
        <Grid sx={{display:'inline-flex', margin:'25px 8px 0px 8px'}} spacing={2} columns={16}  >
            {data.map((image) => (
                    <Grid  item xs={4} >
                         <Box
                            sx={{
                            margin:'0px 5px 0px 5px'
                            }}
                            >
                       <img src={image.image}  width="100%" height="100%" style={{borderRadius:'15px'}}/>
                       {console.log('this is real data', image)}
                       </Box>
                    </Grid>            
            )
            )}
        </Grid>
        // </Box>


    )
}
// export default Carditems;


const mapStateToProps = (state) => ({
    data: state.Reducer1.data
    
});

const mapDispatchToProps = {GetCardData}

export default connect(mapStateToProps, mapDispatchToProps)(Carditems);
