import { CLOSE_FORM_CREATE, SHOW_FORM_CREATE } from "../Contants/CreateNewProductType";


let initialState = {
    showForm: false,
}
export let CreateNewProductFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FORM_CREATE:
            return { ...state, showForm: true };
        case CLOSE_FORM_CREATE:
            return { ...state, showForm: false };
        default:
            return { ...state, }
    }
}