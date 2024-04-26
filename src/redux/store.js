import { createStore } from "redux";
import rootReducer from "./reducer/root";
 
  export const Store = createStore(rootReducer);
