import { FETCH_ADD_NEW_LISTACCOUNT, FETCH_DELETE_LIST_ACCOUNT, FETCH_LIST_ACCOUNT, FETCH_UPDATE_LISTACCOUNT } from "../Contants/AccountType"
// , FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS

let initialState = {
    listAccount: [],
    // loading: false,
    // error: null

}
// let listProductAPI=   action.payload;
// return {
//    ... state,
//    listProduct:listProductAPI,
// };
export let AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST_ACCOUNT:
            return {
                ...state,
                listAccount: action.payload,
            };
        // case FETCH_USERS_REQUEST:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        // case FETCH_USERS_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         listAccount: action.payload,
        //         error: null
        //     };
        // case FETCH_USERS_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload
        //     };
        case FETCH_ADD_NEW_LISTACCOUNT:
            let newAccount = action.payload;
            return {
                ...state,
                listAccount: [...state.listAccount, newAccount],
            };
            case FETCH_UPDATE_LISTACCOUNT:
                let updatedAccount = action.payload;
                let updatedListAccount = state.listAccount.map(account => {
                    if (account.id === updatedAccount.id) {
                        return updatedAccount;
                    }
                    return account;
                });
                return {
                    ...state,
                    listAccount: updatedListAccount,
                };
            return {
                ...state,
                listAccount: updatedListAccount,
            };
            case FETCH_DELETE_LIST_ACCOUNT:
                let deletedAccountId = action.payload;
                let updatedAccounts = state.listAccount.filter(account => account.id !== deletedAccountId);
                return {
                    ...state,
                    listAccount: updatedAccounts,
                };
    
        default:
            return {
                ...state,
            };
    }
};
