import { FETCH_LIST_CATEGORIES } from "../Contants/CategoryType"

let initialState={
    listCategory:[],

}

export let CategoryReducer=(state = initialState, action)=>{
    switch(action.type) {
    case FETCH_LIST_CATEGORIES:
        let listCategoriesAPI=action.payload;
        return {
            ...state,
            listCategory:listCategoriesAPI,
        }
        default:
            return {
                ...state,
            };
    }
}