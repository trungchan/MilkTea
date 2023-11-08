import { ACTION_GET_PRODUCT_BY_ID, FETCH_ADD_NEW_LISTPRODUCT, FETCH_DELETE_LIST_PRODUCT, FETCH_LIST_PRODUCT, FETCH_UPDATE_LISTPRODUCT } from "../Contants/ProductType"

let initialState={
    listProduct: [],
    currentPage: 1,
    totalPages: 6,
    pageSize: 5,
    totalElements:27,
}
export let ProductReducer=(state=initialState,action)=>{
switch(action.type){
    case FETCH_LIST_PRODUCT:
     let listProductAPI=   action.payload;
     return {
        ... state,
        listProduct:listProductAPI,
     };
     case FETCH_ADD_NEW_LISTPRODUCT:
        let newProduct=action.payload;
        return{
            ...state,
            listProduct:[...state.listProduct,newProduct],
        }
        case FETCH_UPDATE_LISTPRODUCT:
            let updateProduct = action.payload;
            let updatedListProduct = state.listProduct.map(product => {
                if (product._id === updateProduct._id) {
                    return updateProduct;
                }
                return product;
            });
            return {
                ...state,
                listProduct: updatedListProduct,
            };
            case FETCH_DELETE_LIST_PRODUCT:
                let idProduct = action.payload;

                let updatedProductList=[...state.listProduct];

                updatedProductList = state.listProduct.filter(product => product.id !== idProduct);
                
                return {
                    ...state,
                    listProduct: updatedProductList,
                };
            case ACTION_GET_PRODUCT_BY_ID:    
          
            return{
                ...state,
                selectedProduct: action.payload,
            };
     default:
            return {
                ...state,
            };
}
}