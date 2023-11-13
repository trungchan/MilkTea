import { api } from "./api"

let getListPayment=(page, pageSize)=>{
    return api("GET",`api/v1/Payments?page=${page}&pageSize=${pageSize}`,null);
}

let getPaymentbyID=(id)=>{
    return api("GET",`api/v1/Payments/${id}`,null);
}

let addnewPayment=(Payment)=>{
    return api("POST",`api/v1/Payments/`,Payment);
}

let updatePayment=(PaymentItem)=>{
    return api("PUT","api/v1/Payments/"+PaymentItem.id,PaymentItem)
}

let deletePayment = (id) =>{
return api("DELETE",`api/v1/Payments/${id}`)
}

export {getListPayment,getPaymentbyID,addnewPayment,updatePayment,deletePayment}
