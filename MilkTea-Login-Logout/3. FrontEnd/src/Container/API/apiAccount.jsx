import axios from "axios";

let axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    //   Authorization: "Basic " + btoa("Username1:123456"),
    "content-type": "application/json",
    
  },
});

export const apiAccount = (method_param, endpoint_param, payload) => {
  return axiosClient({
    method: method_param,
    url: endpoint_param,
    data: payload,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
