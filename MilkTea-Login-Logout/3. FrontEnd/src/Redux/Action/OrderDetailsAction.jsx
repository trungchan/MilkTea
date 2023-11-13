import { addNewOrderDetail, deleteOrderDetailsByID, getListOrderDetails, updateOrderDetailsById } from "../../Container/API/OrderDetailsAPI";

import { FETCH_ADD_NEW_ORDERDETAILS, FETCH_DELETE_ORDERDETAILS, FETCH_LIST_ORDERDETAILS, FETCH_UPDATE_ORDERDETAILS } from "../Contants/OrderDetailsType";

export let actionFetchListOrderDetailsAPI = (page, pageSize) => {
    return (dispatch) => {
      return getListOrderDetails(page, pageSize).then((res) => {
        dispatch(actionFetchListOrderDetailsReduxThunk(res));
      });
    };
  };

export let   actionFetchListOrderDetailsReduxThunk=(listOrderDetails_param)=>{
    return {
        type:FETCH_LIST_ORDERDETAILS,
        payload:listOrderDetails_param,
    };
};
//Add new OrderDetails
export let actionAddNewOrderDetailAPI = (addNewOrderDetails) => {
  return (dispatch) => {
    return addNewOrderDetail(addNewOrderDetails).then((res) => {
      dispatch(actionAddnewOrderDetailThunk(addNewOrderDetails));
    });
  };
}

export let actionAddnewOrderDetailThunk = (newOrderDetails) => {
  return {
    type: FETCH_ADD_NEW_ORDERDETAILS,
    payload: newOrderDetails,
  };
}
//Update OrderDetail By ID use Redux - Thunk
export let actionUpdateOrderDetailAPI=(orderdetailID,UpdateOrderDetail)=>{
  return (dispatch)=>{
    return updateOrderDetailsById(orderdetailID,UpdateOrderDetail).then((res)=>{
      dispatch(actionUpdateOrderDetailThunk(UpdateOrderDetail))
    })
  }
}

export let actionUpdateOrderDetailThunk=(UpdateOrderDetail)=>{
  return{
    type:FETCH_UPDATE_ORDERDETAILS,
    payload: UpdateOrderDetail,
  }
}
//Delete orderDetail BY ID use Redux - thunk
export let actionFetchDeleteOrderDetailsAPIbyID=(id)=>{
  return (dispatch)=>{
    return deleteOrderDetailsByID(id).then((res)=>{
      dispatch(actionFetchDeleteOrderByID(id));
    });
  };
};
export let actionFetchDeleteOrderByID=(id)=>{
  return {
    type: FETCH_DELETE_ORDERDETAILS,
     payload: id,
  };
};
