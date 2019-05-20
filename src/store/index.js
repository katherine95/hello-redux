import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { tech : "React" };
/* create a redux store using createStore function
   pass in the reducer and initialState as an argument */
export const store = createStore(reducer, initialState);
