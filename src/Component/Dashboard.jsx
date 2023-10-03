import React, { useState } from "react";
import MiniDrawer from "./MiniDrawer";
import NoteOne from "./Notes/NoteOne";
import NoteTwo from "./Notes/NoteTwo";
import { Box } from "@mui/material";

export default function Dashboard() {
   

   const[showNoteTwo,setShowNoteTwo] = useState(true);

   const handleToggle=()=>{
   
    setShowNoteTwo(!showNoteTwo)
   } 
   
   
    return (
        <Box>
            <MiniDrawer  />
            {
                showNoteTwo ? <NoteOne handleToggle={handleToggle}/>:<NoteTwo handleToggle={handleToggle}/>
            }
        </Box>
    )
}