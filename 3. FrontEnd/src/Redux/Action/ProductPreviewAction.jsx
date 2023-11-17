import {FETCH_ADD_NEW_LISTPRODUCTPREVIEW, FETCH_DELETE_LIST_PRODUCTPREVIEW, FETCH_LIST_PRODUCTPREVIEW, FETCH_UPDATE_LISTPRODUCTPREVIEW} from './../Contants/ProductPreview';
import {addNewProductReviews, deleteProductReviewsByID, getListProductReviews, updateProductReviewsByID} from './../../Container/API/ProductReviews';
//Get List ProductReviews
export let actionFetchProductReviewAPI=(page, pageSize)=>{
    return (dispatch)=>{
        return getListProductReviews(page, pageSize).then ((res)=>{
            dispatch(actionFetchListProductReviewThunk(res));
        });
    };
};
export let actionFetchListProductReviewThunk=(listProductReview_param)=>{
    return {
        type: FETCH_LIST_PRODUCTPREVIEW,
        payload:listProductReview_param,
    }

}

//AddnewProductReview
export let actionAddProductReviewAPI=(newPaymentData)=>{
    return (dispatch)=>{
        return addNewProductReviews(newPaymentData).then ((res)=>{
            dispatch(actionAddnewProductReviewThunk(res));
        });
    };
};
export let actionAddnewProductReviewThunk=(new_ProductReview_param)=>{
    return {
        type: FETCH_ADD_NEW_LISTPRODUCTPREVIEW,
        payload:new_ProductReview_param,
    }

}
//Update ProductReview
export let actionUpdateProductReviewAPI=(paymentId, updatedPaymentData)=>{
    return (dispatch)=>{
        return updateProductReviewsByID(paymentId,updatedPaymentData).then ((res)=>{
            dispatch(actionUpdateProductReviewThunk(paymentId));
        });
    };
};
export let actionUpdateProductReviewThunk=(updatedPaymentData)=>{
    return {
        type: FETCH_UPDATE_LISTPRODUCTPREVIEW,
        payload:updatedPaymentData,
    }

}
//Delete ProductReview
export const actionDeleteProductReviewAPI = (paymentId) => {
    return async (dispatch) => {
        try {
            const res = await deleteProductReviewsByID(paymentId);
            dispatch(actionDeleteProductReviewThunk(paymentId));
        } catch (error) {
            console.log('Error in fetching data', error);
        }
    };
};;

export let actionDeleteProductReviewThunk = (paymentId) => {
    return {
        type: FETCH_DELETE_LIST_PRODUCTPREVIEW,
        payload: paymentId,
    }
};
