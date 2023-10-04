import axios from "axios"
export const CreateNote = async (obj) => {
    console.log(localStorage.getItem("Token"))
    let response = await axios.post("https://localhost:44316/api/Note/CreateNotes", obj,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    return response;
}

export const GetAllNote = () => {
    let response =  axios.get("https://localhost:44316/api/Note/GetAllNote",
    {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    });
    return response;
}