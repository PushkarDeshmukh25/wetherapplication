import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import curApiReducer from "./Redux/API_CUR_DATA/ApiReducer";
import rootreducer from "./RootReducer";
// import rootreducer from "./RootReducer";



const store = createStore(rootreducer,applyMiddleware(thunk))

export default store;