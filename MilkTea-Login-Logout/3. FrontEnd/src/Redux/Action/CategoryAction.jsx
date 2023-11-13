import { getlistCategory } from "../../Container/API/CategoryAPI"
import { FETCH_LIST_CATEGORIES } from "../Contants/CategoryType";

export let actionFetchCategoryAPI=()=>{
    return(dispatch)=>{
    return getlistCategory().then((res)=>{
        dispatch(actionFetchCategoryThunk(res));
    });
    }
    
}

export let actionFetchCategoryThunk=(listCategories)=>{
    return {
        type:FETCH_LIST_CATEGORIES,
        payload:listCategories,
    }
}