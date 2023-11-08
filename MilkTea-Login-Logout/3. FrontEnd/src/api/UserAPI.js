import { Api } from "./Api"


const loginRequest = (loginRequest) => {
    return Api("POST", "auth/login", loginRequest)
}

// Tạo mới user:
const createUserAPI = (newUser) => {
    return Api("POST", "Account", newUser)
}
export { loginRequest, createUserAPI };


