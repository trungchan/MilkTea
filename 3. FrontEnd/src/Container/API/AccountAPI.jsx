import { api } from "./api"
import { apiAccount } from "./apiAccount";

let getListAccount=()=>{
    return apiAccount("GET",`api/v1/Account`,null);
}

let getAccountbyID=(id)=>{
    return apiAccount("GET",`api/v1/Account/${id}`,null);
}

let addNewAccount=(newAccount)=>{
    return apiAccount("POST",`api/v1/Account`,newAccount);
}


let updateAccount=(id,account)=>{
    return apiAccount("PUT",`api/v1/Account/${id}`,account)
}

let deleteAccount = (id) =>{
return apiAccount("DELETE",`api/v1/Account/${id}`)
}

export {getListAccount,getAccountbyID,addNewAccount,updateAccount,deleteAccount}
