import axios from "axios";
import { addNewAccount, deleteAccount,    getListAccount,    updateAccount } from "../../Container/API/accountAPI"
import { FETCH_ADD_NEW_LISTACCOUNT, FETCH_DELETE_LIST_ACCOUNT,  FETCH_LIST_ACCOUNT, FETCH_UPDATE_LISTACCOUNT, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "../Contants/AccountType";

//Get List accounts
// export let actionFetchAccountAPI = () => {
//     return (dispatch) => {
//         dispatch({ type: FETCH_USERS_REQUEST });

//         axios.get('http://localhost:8080/api/v1/Account')
//             .then((response) => {
//                 let users = response.data;
//                 dispatch(actionFetchListaccountThunk(users));
//             })
//             .catch((error) => {
//                 dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
//             });
//     };
// };

//Get List accounts
export let actionFetchAccountAPI=()=>{
    return(dispatch)=>{
    return getListAccount().then((res)=>{
        dispatch(actionFetchListaccountThunk(res));
    });
    }
    
}

  export let actionFetchListaccountThunk = listaccount_param => {
    return {
      type: FETCH_LIST_ACCOUNT,
      payload: listaccount_param,
    };
  };
  

//Addnewaccount
export let actionAddaccountAPI = (newAccountData) => {
    return (dispatch) => {
        return addNewAccount(newAccountData).then((res) => {
            dispatch(actionAddnewaccountThunk());
        });
    };
};
export let actionAddnewaccountThunk=(new_account_param)=>{
    return {
        type: FETCH_ADD_NEW_LISTACCOUNT,
        payload:new_account_param,
    }

}
//Update account
export let actionUpdateaccountAPI = (updateAccount) => {
    return (dispatch) => {
        return addNewAccount(updateAccount).then((res) => {
            dispatch(actionUpdateaccountThunk(updateAccount));
        });
    };
};

export let actionUpdateaccountThunk = (updatedAccountData) => {
    return {
        type: FETCH_UPDATE_LISTACCOUNT,
        payload: updatedAccountData,
    };
};

//Delete account
export let actionDeleteaccountAPI = (accountid) => {
    return (dispatch) => {
        return deleteAccount(accountid).then((account) => {
            dispatch(actionDeleteaccountThunk(account));
        });
    };
};

export let actionDeleteaccountThunk = (id) => {
    return {
        type: FETCH_DELETE_LIST_ACCOUNT,
        payload: id,
    };
};
