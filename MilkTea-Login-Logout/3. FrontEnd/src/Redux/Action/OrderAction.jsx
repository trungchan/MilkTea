import { addNewOrder, getListOrder } from "../../Container/API/OrderAPI"
import { FETCH_LIST_ORDER,FETCH_ADD_NEW_ORDER, FETCH_UPDATE_ORDER, FETCH_DELETE_ORDER } from "../Contants/OrderType";
//Get List
export let actionFetchOrderAPI=()=>{
    return (dispatch)=>{
    return getListOrder().then((res)=>{
        dispatch(actionFetchOrderThunk(res))
    });
    };
};

export let actionFetchOrderThunk=(listOrder_param)=>{
    return{
   type:FETCH_LIST_ORDER,
   payload:listOrder_param,
    }

}

//ADD NEW
export let actionAddNewOrderAPI =(newOrder)=>{
    return (dispatch)=>{
        return addNewOrder(newOrder).then((res)=>{
            dispatch(actionAddnewOrderThunk(newOrder));
        });
    };
};

export let actionAddnewOrderThunk=(newOrder)=>{
    return{
    type:FETCH_ADD_NEW_ORDER,
    payload:newOrder,
    }
}


//Update
export let actionUpdateOrderAPI =(idOrder,upDateOrder)=>{
    return (dispatch)=>{
        return addNewOrder(idOrder,upDateOrder).then((res)=>{
            dispatch(actionAddnewOrderThunk(upDateOrder));
        });
    };
};

export let actionUpdateOrderThunk=(upDateOrder)=>{
    return{
    type:FETCH_UPDATE_ORDER,
    payload:upDateOrder,
    }
}

//DELETE
export let actionDeleteOrderAPI =(orderID)=>{
    return (dispatch)=>{
        return addNewOrder(orderID).then((res)=>{
            dispatch(actionDeleteOrderThunk(orderID));
        });
    };
};

export let actionDeleteOrderThunk=(orderID)=>{
    return{
    type:FETCH_DELETE_ORDER,
    payload:orderID,
    }
}
