const initialState = {
  data:[],
  }
  
  const Reducer2 = (state = initialState, action) => {
    switch (action.type){
        case 'GET_CARD3DATA':
            console.log("This is get data reducer2", action.payload)
            return{
                ...state,
                data:action.payload,
            }
            default:
                return state;
    }
  }
  
  export default Reducer2