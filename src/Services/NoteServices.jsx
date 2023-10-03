import axios from "axios"
export const CreateNote = (obj) => {
    let response =  axios.post("https://localhost:44316/api/Note/CreateNotes", obj);
    return response;
}
// import axios from "axios"
// export const signin = (obj) => {
//     let response =  axios.post("https://localhost:44316/api/User/login", obj);
//     return response;
// }