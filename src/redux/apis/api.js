import axios from "axios";


 const GetData = async (test) => {
    try {
        const baseURL = 'https://conscious-app-8d882-default-rtdb.firebaseio.com/:food.json';


        console.log('meena', test);
        const response = await axios.get(`${baseURL}`);
        const jsonData = response.data;
        console.log('this is api data', jsonData)
        if (jsonData == null) {
            return [];
        } else {
            return jsonData; 
        }
    } catch (error) {
        console.error(' Api Error ---->', error );
        
    }   
}

// export const SAVE_DATA = async (data) => {
//     try {
//         const response = await axios.post(baseURL, data);
//         return response.data; 
//     } catch (error) {
//         console.error('Error');
//     }
// };

export default GetData;