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

    const [section,setSection]=useState("notes")

    const handleToggle = () => {

        setShowNoteTwo(!showNoteTwo)
    }

  
    const AllNote = async() =>{
        let response = await GetAllNote();
        console.log(response.data.data)
        let newArray = [];
      
        if(section === "notes"){
          newArray = response.data.data.filter(filterData => filterData.isArchive === false && filterData.isTrash === false);
          console.log('Note')
        }
      
        else if(section === "archive"){
          newArray = response.data.data.filter(filterData => filterData.isArchive === true && filterData.isTrash === false);
        }
      
        else if(section === "trash"){
          newArray = response.data.data.filter(filterData => filterData.isArchive === false && filterData.isTrash === true);
        }
        // SetGetAll(response.data.result) //'result' is data comming from Http response and we storing result data in "data"
        console.log(newArray);
        setGetnote(newArray);
      };

      useEffect(() => {
            console.log("Data called")
            AllNote()
        },[section]);
     
    

    return (
        <div>
            <MiniDrawer setSection={setSection} />
            <div>
            {
                showNoteTwo ? <NoteOne handleToggle={handleToggle} /> : <NoteTwo handleToggle={handleToggle} AllNote={AllNote} />
            }
            </div>
           
            <div className="notethree">
                {
                    getnote.map((data) =>
                        (<NoteThree key={data.id} data={data} AllNote={AllNote} TrashSection={data.isTrash}/>))
                }
            </div>
            {/* <NoteThree/> */}
        </div>
    )
}