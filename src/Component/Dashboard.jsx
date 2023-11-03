import React, { useEffect, useState } from "react";
import MiniDrawer from "./MiniDrawer";
import NoteOne from "./Notes/NoteOne";
import NoteTwo from "./Notes/NoteTwo";
import NoteThree from "./Notes/NoteThree";
import { displayNote } from "../Services/NoteServices";


export default function Dashboard() {

    const [showNoteTwo, setShowNoteTwo] = useState(true);


    const [getnote, setGetnote] = useState([]);

    const [collection, setCollection] = useState("notes")

    const handleToggle = () => {

        setShowNoteTwo(!showNoteTwo)
    }


    const allNote = async () => {


        let response = await displayNote();
        console.log(response.data.data);


        let newArray = [];

        if (collection === "notes") {
            newArray = response.data.data.filter(filterData => filterData.isArchive === false && filterData.isTrash === false);
            console.log('Note');
            setGetnote(newArray);
        } else if (collection === "archive") {
            newArray = response.data.data.filter(filterData => filterData.isArchive === true && filterData.isTrash === false);
            setGetnote(newArray);
        } else if (collection === "trash") {
            newArray = response.data.data.filter(filterData => filterData.isArchive === false && filterData.isTrash === true);
            setGetnote(newArray);
        }
        console.log(newArray);
        
    }





    useEffect(() => {
        console.log("Data called")
        allNote()
    }, [getnote]);



    return (
        <div>
            <MiniDrawer setCollection={setCollection} />
            <div>
                {
                    showNoteTwo ? <NoteOne handleToggle={handleToggle} /> : <NoteTwo handleToggle={handleToggle} allNote={allNote} />
                }
            </div>

            <div className="notethree">
                {
                    getnote.length === 0 ? (
                        <p style={{border:"20px", paddingTop:'45px'}}>No notes to display.</p>
                    ) : (
                        getnote.map((data) => (
                            <NoteThree key={data.id} data={data} TrashSection={data.isTrash} allNote={allNote} />
                        ))
                    )}
            </div>
            {/* <NoteThree/> */}
            {/* {
                <div>
                    {
                        getnote.length === 0 ? (
                            <div>
                                {
                                    showNoteTwo ? <NoteOne handleToggle={handleToggle} /> : <NoteTwo handleToggle={handleToggle} allNote={allNote} />
                                }
                            </div>
                        ) :

                            (<div>
                                {showNoteTwo ? <NoteOne handleToggle={handleToggle} /> : <NoteTwo handleToggle={handleToggle} allNote={allNote} />}
                                <div className="notethree">
                                    {getnote.map((data) => (
                                        <NoteThree key={data.id} data={data} TrashSection={data.isTrash} allNote={allNote} />
                                    ))}
                                </div>
                            </div>
                            )
                    }
                </div>
            } */}
        </div>
    )
}