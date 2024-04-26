const initialState = {
  data:[],
}

const Reducer1 = (state = initialState, action) => {
  switch (action.type){
      case 'GET_DATA':
          console.log("This is get data reducer", action.payload)
          return{
              ...state,
              data:action.payload,
          }
          default:
              return state;
  }
}

export default Reducer1;