import { FETCH_ADD_NEW_LISTPRODUCTPREVIEW, FETCH_DELETE_LIST_PRODUCTPREVIEW, FETCH_LIST_PRODUCTPREVIEW, FETCH_UPDATE_LISTPRODUCTPREVIEW } from "../Contants/ProductPreview"

let initialState = {
    listProductPreview: [],
    currentPage: 1,
    totalPages: 2,
    pageSize: 5,
}
export let ProductPreview = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_PRODUCTPREVIEW:
            let listProductPreviewAPI = action.payload;
            return {
                ...state,
                listProductPreview: listProductPreviewAPI,
            };
        case FETCH_ADD_NEW_LISTPRODUCTPREVIEW:
            let newPreview = action.payload;
            return {
                ...state,
                listProductPreview: [...state.listProductPreview, newPreview],
            };
        case FETCH_UPDATE_LISTPRODUCTPREVIEW:
            let updatePreview = action.payload;
            let updateListProductPreview = state.listProductPreview.map(preview => {
                if (preview._id === updatePreview._id) {
                    return updatePreview;
                }
                return preview;
            });
            return {
                ...state,
                listProductPreview: updateListProductPreview,
            };
        case FETCH_DELETE_LIST_PRODUCTPREVIEW:
            let idDeletePreview = action.payload;
            let listUpdateAfterDelete = state.listProductPreview.filter(preview => preview._id !== idDeletePreview);
            return {
                ...state,
                listProductPreview: listUpdateAfterDelete,
            };
        default:
            return {
                ...state,
            }
    }
}