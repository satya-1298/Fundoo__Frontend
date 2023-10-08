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

    const [collection, setCollection] = useState("notes")

    const handleToggle = () => {

        setShowNoteTwo(!showNoteTwo)
    }


    const AllNote = async () => {

        try {
            let response = await GetAllNote();
            console.log(response.data.data);

            if (!response.data.data || response.data.data.length === 0) {
                // Handle the case when there are no notes to display
                console.log("No notes found.");
                setGetnote([]); // Clear the existing notes
            } else {
                let newArray = [];

                if (collection === "notes") {
                    newArray = response.data.data.filter(filterData => filterData.isArchive === false && filterData.isTrash === false);
                    console.log('Note');
                } else if (collection === "archive") {
                    newArray = response.data.data.filter(filterData => filterData.isArchive === true && filterData.isTrash === false);
                } else if (collection === "trash") {
                    newArray = response.data.data.filter(filterData => filterData.isArchive === false && filterData.isTrash === true);
                }
                console.log(newArray);
                setGetnote(newArray);
            }
        } catch (error) {
            console.error("Error in GetAllNote:", error);
            throw error; 

        };

    };

    useEffect(() => {
        console.log("Data called")
        AllNote()
    }, [getnote]);



    return (
        <div>
            <MiniDrawer setCollection={setCollection} />
            <div>
                {
                    showNoteTwo ? <NoteOne handleToggle={handleToggle} /> : <NoteTwo handleToggle={handleToggle} AllNote={AllNote} />
                }
            </div>

            <div className="notethree">
                {
                    getnote.map((data) =>
                        (<NoteThree key={data.id} data={data} AllNote={AllNote} TrashSection={data.isTrash} />))
                }
            </div>
            {/* <NoteThree/> */}
        </div>
    )
}