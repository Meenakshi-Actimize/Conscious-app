import { GET_CARD3DATA } from "./actiontypes";



export const Getcard3images = (data) => {
    console.log('This is card3data....', data);
    console.log('card3Images action');

    return{

        type:GET_CARD3DATA,
        payload: data, 

    }
}