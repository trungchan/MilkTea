import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    headers: {
        "Content-Type": "application/json",
    }
});


export const Api = (method, endPoint, payLoad) => {
    return axiosClient(endPoint, { method: method, data: payLoad }).then((resp) => {
        return resp.data;
    }).catch((error) => {
        console.log(error);
    });
};



