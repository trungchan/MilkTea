import { FETCH_ADD_NEW_LISTPAYMENT, FETCH_DELETE_LIST_PAYMENT, FETCH_LIST_PAYMENT, FETCH_UPDATE_LISTPAYMENT } from "../Contants/PaymentType";

  
  let initialState = {
    listPayment: [],
    currentPage: 1,
      totalPages: 2,
      pageSize: 5,
  };
  
  export let OrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LIST_PAYMENT:
        let listPaymentAPI = action.payload;
        return {
          ...state,
          listPayment: listPaymentAPI,
        };
      case FETCH_ADD_NEW_LISTPAYMENT:
        let newPayment = action.payload;
        return {
          ...state,
          listPayment: [...state.listPayment, newPayment],
        };
      case FETCH_UPDATE_LISTPAYMENT:
        let updatePayment = action.payload;
        let updateListPayment = state.listOrder.map((payment) => {
          if (payment._id === updatePayment._id) {
            return updatePayment;
          }
          return order;
        });
        return {
          ...state,
          listOrder: updateListPayment,
        };
      case FETCH_DELETE_LIST_PAYMENT:
        let idPayment = action.payload;
        let listPaymentAPI = state.listPayment.filter(
          (payment) => payment.id !== idPayment
        );
        return {
          ...state,
          listPayment: listPaymentAPI,
        };
      default:
        return {
          ...state,
        };
    }
  };
  