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
    console.log('id', archiveNoteObj.noteId)
    let response = await axios.put(`https://localhost:44316/api/Note/IsArchive/?noteId=${archiveNoteObj.noteId}`, archiveNoteObj.noteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'Token'}`,
        }
    })
    return response;
}

export const DeleteNote = async (DelNoteObj) => {
    console.log('id', DelNoteObj.noteId)
    let response = await axios.delete(`https://localhost:44316/api/Note/DeleteNote/?noteId=${DelNoteObj.noteId}`, DelNoteObj.noteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'Token'}`,
        }
    })
    return response;
}
export const TrashNote = async (TrashNoteObj) => {
    console.log('id', TrashNoteObj.noteId)
    let response = await axios.delete(`https://localhost:44316/api/Note/IsTrash/?noteId=${TrashNoteObj.noteId}`, TrashNoteObj.noteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'Token'}`,
        }
    })
    return response;
}