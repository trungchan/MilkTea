import { CLOSE_FORM, SHOW_FORM } from "../Contants/UpdateOrderDetailsForm";


let initialState = {
    showForm: false,
}
export let UpdateOrderDetailsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FORM:
            return { ...state, showForm: true };
        case CLOSE_FORM:
            return { ...state, showForm: false };
        default:
            return { ...state, }
    }
}