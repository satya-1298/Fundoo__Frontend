import axios from "axios"
export const CreateNote = async (obj) => {
    console.log(localStorage.getItem("Token"))
    let response = await axios.post("https://localhost:44316/api/Note/CreateNotes", obj,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
       await displayNote();
    return response;
}

export const displayNote = async () => {
    let response =  axios.get("https://localhost:44316/api/Note/GetAllNote",
    {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    });
    return response;
}
export const archiveNote = async (archiveNoteObj) => {
    console.log('id', archiveNoteObj.noteID)
    let response = await axios.put(`https://localhost:44316/api/Note/IsArchive/${archiveNoteObj.noteID}`, archiveNoteObj.noteID, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`,
        }
    })
    return response;
}


export const trashNote = async (TrashNoteObj) => {
    let response = await axios.put(`https://localhost:44316/api/Note/IsTrash/${TrashNoteObj.noteID}`, TrashNoteObj, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`,
        }
    })
    return response;
}
export const permenentDeleteNote = async (DelNoteObj) => {
    let response = await axios.delete(`https://localhost:44316/api/Note/DeleteNote/${DelNoteObj.noteID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    return response;
}