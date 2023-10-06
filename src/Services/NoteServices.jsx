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
export const ArchiveNote = async (archiveNoteObj) => {
    console.log('id', archiveNoteObj.noteID)
    let response = await axios.put(`https://localhost:44316/api/Note/IsArchive/${archiveNoteObj.noteID}`, archiveNoteObj.noteID, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`,
        }
    })
    return response;
}

export const DeleteNote = async (DelNoteObj) => {
    console.log('id', DelNoteObj.noteID)
    let response = await axios.delete(`https://localhost:44316/api/Note/DeleteNote/${DelNoteObj.noteID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`,
        }
    })
    return response;
}
export const TrashNote = async (TrashNoteObj) => {
    console.log('id', TrashNoteObj.noteID)
    let response = await axios.put(`https://localhost:44316/api/Note/IsTrash/${TrashNoteObj.noteID}`, TrashNoteObj, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`,
        }
    })
    return response;
}