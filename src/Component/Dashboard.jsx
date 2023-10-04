import React, { useEffect, useState } from "react";
import MiniDrawer from "./MiniDrawer";
import NoteOne from "./Notes/NoteOne";
import NoteTwo from "./Notes/NoteTwo";
import { Box, Grid } from "@mui/material";
import NoteThree from "./Notes/NoteThree";
import { GetAllNote } from "../Services/NoteServices";


export default function Dashboard() {


    const [showNoteTwo, setShowNoteTwo] = useState(true);

    const handleToggle = () => {

        setShowNoteTwo(!showNoteTwo)
    }
    const [getnote, setGetnote] = useState([]);

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
    //console.log(getnote)

    return (
        <div>
            <MiniDrawer />
            <div>
            {
                showNoteTwo ? <NoteOne handleToggle={handleToggle} /> : <NoteTwo handleToggle={handleToggle} AllNote={AllNote} />
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