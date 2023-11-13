import { api } from "./api"

let getListProduct=(page, pageSize)=>{
    return api("GET",`api/v1/products?page=${page}&pageSize=${pageSize}`,null);
}

let getProductbyID=(id)=>{
    return api("GET",`api/v1/products/${id}`,null);
}

let addnewProduct=(product)=>{
    return api("POST",`api/v1/products`,product);
}

let updateProduct=(id,productData)=>{
    return api("PUT",`api/v1/products/${id}`,productData)
}

let deleteProduct = (id) =>{
return api("DELETE",`api/v1/products/${id}`)
}

export {getListProduct,getProductbyID,addnewProduct,updateProduct,deleteProduct}
