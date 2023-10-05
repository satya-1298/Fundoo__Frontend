import React, { useEffect, useState } from "react";
import MiniDrawer from "./MiniDrawer";
import NoteOne from "./Notes/NoteOne";
import NoteTwo from "./Notes/NoteTwo";
import { Box, Grid } from "@mui/material";
import NoteThree from "./Notes/NoteThree";
import { GetAllNote } from "../Services/NoteServices";
// import Header from "./Header";


export default function Dashboard() {

    const [showNoteTwo, setShowNoteTwo] = useState(true);

   
    const [getnote, setGetnote] = useState([]);

    const [noteoption,setNoteoption]=useState("Notes")

    const handleToggle = () => {

        setShowNoteTwo(!showNoteTwo)
    }

    const AllNote = async () => {
        try {
            console.log('Hi');
            let response = await GetAllNote();
            console.log('Hello');
            console.log(response.data.data);

            setGetnote(response.data.data); // Set only the data array, not the entire response object
            console.log('Hiiiii');
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };
    useEffect(() => {
        console.log("Data called")
        AllNote()
    }, []);


        // GetAllNote()
    //     .then((response)=>{
    //         let filterNote=[]
    //         let arr=response.data.data;
    //         if(noteoption==='Notes'){
    //             filterNote=response.data.data.filter((note)=>
    //             {
    //                 if(note.IsArchive===false && note.IsTrash===false){
    //                     return note
    //                 }
    //             })

    //         }
    //         else if(noteoption==='Archive'){
    //             filterNote=response.data.data.filter((note)=>{
    //                 if(note.IsArchive===true&&note.IsTrash===false){
    //                     return note
    //                 }
    //             })
    //         }
    //         else if(noteoption==='Trash'){
    //             filterNote=response.data.data.filter((note)=>{
    //                 if(note.IsArchive===false && note.IsTrash===false){
    //                     return note
    //                 }
    //             })
    //         }
    //         console.log(response)
    //         setGetnote(filterNote)
    //     })
    //     .catch((error)=>
    //     {
    //         console.log(error);
    //     })
    // }
    // useEffect(()=>{
    //     console.log("Data Called");
    //     AllNote();
    // },[noteoption])
    // const autoRefresh=()=>{
    //     AllNote()
    // }

   

    return (
        <div>
            <MiniDrawer setNoteoption={setNoteoption} />
            <div>
            {
                showNoteTwo ? <NoteOne handleToggle={handleToggle} /> : <NoteTwo handleToggle={handleToggle}  AllNote={AllNote} />
            }
            </div>
           
            <div className="notethree">
                {
                    getnote.map((data) =>
                        (<NoteThree key={data.id} data={data} AllNote={AllNote} />))
                }
            </div>
            {/* <NoteThree/> */}
        </div>
    )
}