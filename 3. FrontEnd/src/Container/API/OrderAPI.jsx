import { api } from "./api";

let getListOrder=(page,Pagesize)=>{
    return api("GET",`api/v1/Orders?page=${page}&Pagesize=${Pagesize}`,null);
}

let getListOrderByID=(id)=>{
    return api("GET",`api/v1/Orders/${id}`,null);
}

let addNewOrder=(OrderNew)=>{
    return api("POST",`api/v1/Orders`,{accountId: OrderNew});
}


let updateOrder=(id,OrderNew)=>{
    return api("PUT",`api/v1/Orders/${id}`,OrderNew);
}

let deleteOrder=(id)=>{
    return api("DELETE",`api/v1/Orders/${id}`)
}

export {getListOrder,getListOrderByID,addNewOrder,updateOrder,deleteOrder};
