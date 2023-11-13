import { ADD_TO_CART, DECREMENT, DELETE_ITEM_CART, DELETE_LIST_ITEM_CART, INCREMENT } from "../Contants/ActiontypeCart";

export const actionAddToCart = (newItem) => {
    return {
        type: ADD_TO_CART,
        payload: newItem,
    };
};
export let actionDeleteItem = (id) => {
    return {
        type: DELETE_ITEM_CART,
        payload: id,
    }
}

export let actionDeleteAllList = () => {
    return {
        type: DELETE_LIST_ITEM_CART,
       
    }
}
 
export let actionIncrement = (id) => {
    return {
        type: INCREMENT,
        payload: id,
    }
}

export let actionDecrement = (id) => {
    return {
        type: DECREMENT,
        payload: id,
    }
}