import { addnewPayment, deletePayment, getListPayment, updatePayment } from "../../Container/API/PAYMENTAPI"
import { FETCH_ADD_NEW_LISTPAYMENT, FETCH_DELETE_LIST_PAYMENT, FETCH_LIST_PAYMENT, FETCH_UPDATE_LISTPAYMENT } from "../Contants/PaymentType";

//Get List PAYMENTs
export let actionFetchPAYMENTAPI=(page, pageSize)=>{
    return (dispatch)=>{
        return getListPayment(page, pageSize).then ((res)=>{
            dispatch(actionFetchListPAYMENTThunk(res));
        });
    };
};
export let actionFetchListPAYMENTThunk=(listPAYMENT_param)=>{
    return {
        type: FETCH_LIST_PAYMENT,
        payload:listPAYMENT_param,
    }

}

//AddnewPAYMENT
export let actionAddPAYMENTAPI=(newPaymentData)=>{
    return (dispatch)=>{
        return addnewPayment(newPaymentData).then ((res)=>{
            dispatch(actionAddnewPAYMENTThunk(res));
        });
    };
};
export let actionAddnewPAYMENTThunk=(new_PAYMENT_param)=>{
    return {
        type: FETCH_ADD_NEW_LISTPAYMENT,
        payload:new_PAYMENT_param,
    }

}
//Update PAYMENT
export let actionUpdatePAYMENTAPI=(paymentId, updatedPaymentData)=>{
    return (dispatch)=>{
        return updatePayment(paymentId,updatedPaymentData).then ((res)=>{
            dispatch(actionUpdatePAYMENTThunk(paymentId));
        });
    };
};
export let actionUpdatePAYMENTThunk=(updatedPaymentData)=>{
    return {
        type: FETCH_UPDATE_LISTPAYMENT,
        payload:updatedPaymentData,
    }

}
//Delete PAYMENT
export let actionDeletePAYMENTAPI = (paymentId) => {
    return (dispatch) => {
        return deletePayment(paymentId).then((res) => {
            dispatch(actionDeletePAYMENTThunk(paymentId));
        });
    };
};

export let actionDeletePAYMENTThunk = (paymentId) => {
    return {
        type: FETCH_DELETE_LIST_PAYMENT,
        payload: paymentId,
    }
};
