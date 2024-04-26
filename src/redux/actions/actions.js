import { GET_DATA } from "./actiontypes";

export const GetCardData = (data) => {

  console.log('This is imagedata....', data);
  console.log('Images action');

  return {
    type: GET_DATA,
    payload: data,
  };
};
