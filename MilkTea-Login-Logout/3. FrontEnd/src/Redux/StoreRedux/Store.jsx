import {applyMiddleware, createStore,compose}  from "redux";
import { RootReducer } from "../Reducer/Root";
import thunk from 'redux-thunk';


const midleware=compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export let  storeRedux=createStore(RootReducer,midleware);