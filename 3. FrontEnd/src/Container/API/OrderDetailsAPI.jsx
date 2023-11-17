import { api } from "./api";

let getListOrderDetails = (page, pageSize) => {
    
  return api("GET", `api/v1/Orderdetails?page=${page}&pageSize=${pageSize}`, null);
  };

let getOrderDetailbyID=(id)=>{
  return api("GET",`api/v1/Orderdetails/${id}`)
}
let addNewOrderDetail=(orderdetail)  =>{
  return api("POST","api/v1/Orderdetails",orderdetail);
}

let updateOrderDetailsById=(id,orderdetail)=>{
  return api("PUT",`api/v1/Orderdetails/${id}`,orderdetail);
}

 let deleteOrderDetailsByID=(id)=>{
  return api('DELETE', `api/v1/Orderdetails/${id}`)
 } 

export {getListOrderDetails,getOrderDetailbyID,updateOrderDetailsById,deleteOrderDetailsByID,addNewOrderDetail}  ;