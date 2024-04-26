import axios from "axios";
// import { BaseUrl } from "./CommonApi";

const url="https://conscious-app-8d882-default-rtdb.firebaseio.com/secondcarddata"

export const GetCards3Data = async () => {
    try{
        const response = await axios.get(`${url}.json`)
        console.log("This is Data from the 3FireBase ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}