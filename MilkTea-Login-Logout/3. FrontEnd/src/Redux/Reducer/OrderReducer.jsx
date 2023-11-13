import {
  FETCH_ADD_NEW_ORDER,
  FETCH_DELETE_ORDER,
  FETCH_LIST_ORDER,
  FETCH_UPDATE_ORDER,
} from "../Contants/OrderType";

let initialState = {
  listOrder: [],
  currentPage: 0,
    totalPages: 2,
    pageSize: 9999,
};

export let OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_ORDER:
      let listOrderAPI = action.payload;
      return {
        ...state,
        listOrder: listOrderAPI,
      };
    case FETCH_ADD_NEW_ORDER:
      let newOrder = action.payload;
      return {
        ...state,
        listOrder: [...state.listOrder, newOrder],
      };
    case FETCH_UPDATE_ORDER:
      let updatedOrderData = action.payload;
      let updatedListOrder = state.listOrder.map((order) => {
        if (order._id === updatedOrderData._id) {
          return updatedOrderData;
        }
        return order;
      });
      return {
        ...state,
        listOrder: updatedListOrder,
      };
    case FETCH_DELETE_ORDER:
      let deleteIDOrder = action.payload;
      let listOderDeleteAPI = state.listOrder.filter(
        (order) => order.id !== deleteIDOrder
      );
      return {
        ...state,
        listOrder: listOderDeleteAPI,
      };
    default:
      return {
        ...state,
      };
  }
};
