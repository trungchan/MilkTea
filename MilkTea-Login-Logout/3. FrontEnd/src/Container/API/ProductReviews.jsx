import { api } from "./api";

let getListProductReviews = (page, pageSize) => {
    
  return api("GET", `api/v1/ProductReviews?page=${page}&pageSize=${pageSize}`, null);
  };

let getProductReviewsbyID=(id)=>{
  return api("GET",`api/v1/ProductReviews/${id}`)
}
let addNewProductReviews=(productpreview)  =>{
  return api("POST","api/v1/ProductReviews",productpreview);
}

let updateProductReviewsByID=(id,productpreview)=>{
  return api("PUT",`api/v1/ProductReviews/${id}`,productpreview);
}

 let deleteProductReviewsByID=(id)=>{
  return api('DELETE', `api/v1/ProductReviews/${id}`)
 } 

export {getListProductReviews,getProductReviewsbyID,addNewProductReviews,updateProductReviewsByID,deleteProductReviewsByID}  ;