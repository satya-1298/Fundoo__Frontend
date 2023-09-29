import axios from "axios"
export const signin = (obj) => {
    let response =  axios.post("https://localhost:44316/api/User/login", obj);
    return response;
}
export const signup = (obj) => {
    let response = axios.post('https://localhost:44316/api/User/Register', obj);
    return response;
}
