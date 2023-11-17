import { addnewProduct, deleteProduct, getListProduct, getProductbyID, updateProduct } from "../../Container/API/ProductAPI"
import { ACTION_GET_PRODUCT_BY_ID, FETCH_ADD_NEW_LISTPRODUCT, FETCH_DELETE_LIST_PRODUCT, FETCH_LIST_PRODUCT, FETCH_UPDATE_LISTPRODUCT } from "../Contants/ProductType"
//Get List Products
export let actionFetchProductAPI=(page, pageSize)=>{
    return (dispatch)=>{
        return getListProduct(page, pageSize).then ((res)=>{
            dispatch(actionFetchListProductThunk(res));
        });
    };
};
export let actionFetchListProductThunk=(listProduct_param)=>{
    return {
        type: FETCH_LIST_PRODUCT,
        payload:listProduct_param,
    }

}

//AddnewProduct
export let actionAddProductAPI = (newProductData) => {
    return (dispatch) => {
        return addnewProduct(newProductData).then((res) => {
            dispatch(actionAddnewProductThunk(res));
        });
    };
};
export let actionAddnewProductThunk = (newProductData) => {
    return {
        type: FETCH_ADD_NEW_LISTPRODUCT,
        payload: newProductData,
    }
}

//Update Product
export let actionUpdateProductAPI = (productId, updatedProductData) => {
    return (dispatch) => {
        return updateProduct(productId, updatedProductData).then((res) => {
            dispatch(actionUpdateProductThunk(updatedProductData));
        });
    };
};

export let actionUpdateProductThunk = (updatedProductData) => {
    return {
        type: FETCH_UPDATE_LISTPRODUCT,
        payload: updatedProductData,
    }
}

//Delete Product
export let actionDeleteProductAPI = (productId) => {
    return (dispatch) => {
        return deleteProduct(productId).then((res) => {
            dispatch(actionDeleteProductThunk(productId));
        });
    };
};
export let actionDeleteProductThunk = (productId) => {
    return {
        type: FETCH_DELETE_LIST_PRODUCT,
        payload: productId,
    };
};


//GET Product BY ID
export let actionProductByIDAPI = (productId) => {
    return (dispatch) => {
        return getProductbyID(productId).then((product) => {
            dispatch(actionProductByIDThunk(product.data));
        });
    };
};
export let actionProductByIDThunk = (product) => {
    return {
        type: ACTION_GET_PRODUCT_BY_ID,
        payload: product,
    };
};

