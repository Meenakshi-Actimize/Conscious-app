import { GET_VIDEOS } from "./actiontypes";

export const Getvideos = (videos) => {
    console.log('This is imagedata....', videos);
    console.log('Images action');

    return{

        type:'GET_VIDEOS',
        payload: videos, 

    }
}