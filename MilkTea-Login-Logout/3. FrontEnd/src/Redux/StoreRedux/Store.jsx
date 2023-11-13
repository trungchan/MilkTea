import {applyMiddleware, createStore,compose}  from "redux";
import { RootReducer } from "../Reducer/Root";
import thunk from 'redux-thunk';


const midleware=compose(applyMiddleware(thunk));

export let  storeRedux=createStore(RootReducer,midleware);