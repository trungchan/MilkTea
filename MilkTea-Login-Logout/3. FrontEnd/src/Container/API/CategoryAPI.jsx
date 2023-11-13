import { api } from "./api";

let getlistCategory=()=>{
    return api("GET",`api/v1/categories`,null);

}

export {getlistCategory};