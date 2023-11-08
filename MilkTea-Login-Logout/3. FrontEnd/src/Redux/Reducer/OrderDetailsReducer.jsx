import { FETCH_ADD_NEW_ORDERDETAILS, FETCH_DELETE_ORDERDETAILS, FETCH_LIST_ORDERDETAILS, FETCH_UPDATE_ORDERDETAILS } from "../Contants/OrderDetailsType";

let initialState = {
    listOrderDetails: [],
    currentPage: 1,
    totalPages: 2,
    pageSize: 5,
    total: 0,
};

export let OrderDetailsReducer = (state = initialState, action) => {
    switch (action.type) { // Sử dụng action.type thay vì action.payload
        case FETCH_LIST_ORDERDETAILS:
            let listOrderDetailsAPI = action.payload;
            let total = 0;
            total = listOrderDetailsAPI.reduce((total1, item) => total1 + Number(item.unitPrice), 0);
            
            return {
                ...state,
                listOrderDetails: listOrderDetailsAPI,
                total: total,
            };
        case FETCH_ADD_NEW_ORDERDETAILS:
            let newOrderDetail = action.payload;
            return {
                ...state,
                listOrderDetails: [...state.listOrderDetails, newOrderDetail],
            }
        case FETCH_UPDATE_ORDERDETAILS:
            let updateOrderDetail = action.payload;
            let updateListOrderDetails = state.listOrderDetails.map(orderdertail => {
                if (orderdertail.id == updateOrderDetail.id) {
                    return updateOrderDetail;
                };
                return updateOrderDetail;
            });
            return {
                ...state,
                listOrderDetails: updateListOrderDetails,
            }
        case FETCH_DELETE_ORDERDETAILS:
            let idToDelete = action.payload;
            let newListOrderDetails = [...state.listOrderDetails];
            newListOrderDetails = newListOrderDetails.filter(orderDetail => orderDetail.id !== idToDelete);
            return {
                ...state,
                listOrderDetails: newListOrderDetails,
            };
        default:
            return {
                ...state,
            };
    }
};
