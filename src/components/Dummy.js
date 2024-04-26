// // import * as React from 'react';
// // import { Grid , Box} from '@mui/material';
// // import { Container } from '@mui/material';

// // function Dummy(){
// //     return(
// //         <>
// //         <Box sx={{  display:{xs:'none'}}}>
// //         <Grid  sx={{ border:'1px solid red'}}>
// //             Hi
           
// //             </Grid>

// //         </Box>

// //         </>
// //     )
// // }

// // export default Dummy;


// import * as React from 'react';
// import axios from 'axios';


// export const GetData = async () => {
//     const url = "https://conscious-app-8d882-default-rtdb.firebaseio.com/images/-Nw4N6BLMVdeT332IxWe.json";
//     try{
//         const response = await axios.get(`${url}`)
//         console.log("This is Data from the FireBase ----->", response);

//         return []
//     }
//     catch(error) {
//         console.log('error in  get api data', error.message)
//         return [];
//     }
// }