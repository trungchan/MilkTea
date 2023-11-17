import { combineReducers } from "redux";
import { addToCartReducer } from "./AddToCartReducer";
import { OrderDetailsReducer } from "./OrderDetailsReducer";
import { ProductReducer } from "./ProductReducer";
import { CategoryReducer } from "./CategoryReducer";
import { OrderReducer } from "./OrderReducer";
import { AccountReducer } from "./AccountReducer";
import { ProductPreview } from "./ProductPreviewReducer";
import { UpdateOrderDetailsFormReducer } from "./UpdateOrderDetailsFormReducer";
import { CreateNewProductFormReducer } from "./CreateNewProductFormReducer";
// import AccountreducerRedux from "./AccountReduxReducer";
// import {AccountreducerRedux} from "./AccountReduxReducer"

export let RootReducer=combineReducers({
    addToCart:addToCartReducer,
    orderDetails:OrderDetailsReducer,
    product:ProductReducer,
    category:CategoryReducer,
    order:OrderReducer,
    account:AccountReducer,
    productpreview:ProductPreview,
    updateorderdetailsForm:UpdateOrderDetailsFormReducer,
    createnewProductForm:CreateNewProductFormReducer,
    // accountRedux:AccountreducerRedux,
});
