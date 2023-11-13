import { ADD_TO_CART, DECREMENT, DELETE_ITEM_CART,  DELETE_LIST_ITEM_CART,  INCREMENT } from "../Contants/ActiontypeCart";

let initialState = {
    listItem: [],
    totalQuantity: 0,
    totalAmount: 0,
   
};

export let addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let newItem = action.payload;
            let existingItem = state.listItem.find((item) => item.id === newItem.id);

            if (!existingItem) {
                let updatedList = [
                    ...state.listItem,
                    {
                        id: newItem.id,
                        name: newItem.name,
                        image: newItem.image,
                        price: newItem.price,
                        size:newItem.size,
                        quantity: newItem.quantity,
                        totalPrice: newItem.price * newItem.quantity, // Calculate totalPrice against price * quantity
                    },
                ];

                let totalQuantity = state.totalQuantity + newItem.quantity; // Update tổng số lượng
                let totalAmount = updatedList.reduce(
                    (total, item) => total + Number(item.totalPrice), // Calculate totalAmount against totalPrice
                    0
                );

                return {
                    ...state,
                    totalQuantity,
                    listItem: updatedList,
                    totalAmount,
                };
            } else {
                let updatedlistItems = state.listItem.map((item) => {
                    if (item.id === newItem.id) {
                        return {
                            ...item,
                            quantity: item.quantity + newItem.quantity,
                            totalPrice: Number(item.totalPrice) + Number(newItem.price) * newItem.quantity,
                        };
                    }
                    return item;
                });

                let totalQuantity = state.totalQuantity + newItem.quantity; 
                let totalAmount = updatedlistItems.reduce(
                    (total, item) => total + Number(item.totalPrice), 
                    0
                );

                return {
                    ...state,
                    totalQuantity,
                    listItem: updatedlistItems,
                    totalAmount,
                };
            }

           
            case DELETE_ITEM_CART:
                const id = action.payload;
                const itemToDelete = state.listItem.find((item) => item.id === id);
              
                if (itemToDelete) {
                  const updatedList = state.listItem.filter((item) => item.id !== id);
                  const deletedItemQuantity = itemToDelete.quantity;
              
                  return {
                    ...state,
                    listItem: updatedList,
                    totalQuantity: state.totalQuantity - deletedItemQuantity,
                    totalAmount: updatedList.reduce(
                      (total, item) => total + parseFloat(item.price) * item.quantity,
                      0
                    ),
                  };
                }
              
                return state;
            case DELETE_LIST_ITEM_CART:
            return {
                ...state,
                listItem: [],
                totalQuantity: 0, 
                totalAmount: 0, 
               
            } 
        case INCREMENT:
            
            return {
                ...state,
                listItem:state.listItem.map(item=>{
                    if(item.id===action.payload){
                        return {
                            ...item,
                            quantity:item.quantity+1,
                        }
                    }else{
                        return item;
                    }
                })
            };
        case DECREMENT:
            
        return {
            ...state,
            listItem:state.listItem.map(item=>{
                if(item.id===action.payload){
                    return {
                        ...item,
                        quantity:item.quantity-1,
                    }
                }else{
                    return item;
                }
            }).filter(item=>item.quantity!==0)
        };
        default:
            return state;
    }
};
