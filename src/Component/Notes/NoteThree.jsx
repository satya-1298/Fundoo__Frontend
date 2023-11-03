import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton, Paper } from "@mui/material";
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './DashBoard.css'
import './NoteThree.css';
import { archiveNote } from '../../Services/NoteServices';
import {trashNote} from  '../../Services/NoteServices';
import {permenentDeleteNote} from  '../../Services/NoteServices';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function NoteThree(props) {
console.log("getnote",props)

        const setArchive = (id) => {
            let obj = { noteID: id };
            archiveNote(obj)
            .then((response) => {
                props.allNote()
                console.log(response);
            })
            .catch((error) => {
                console.error("Error archiving note:", error);
            });
        }

        const setTrash = (id) => {
            let obj = { noteID: id };
            trashNote(obj)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error trashing note:", error);
            });
        }
        const setDelete=(id)=>{
            let obj ={noteID:id};
            console.log('hehe')
            permenentDeleteNote(obj)
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>
            {
                console.error("Error deleting note:",error);
            });
        }


       
 
    return (
        
        <Box className="Note3Box"
            sx={{
                 display: 'flex',
                
                '& > :not(style)': {
                    m: 1,
                    
                },
            }}
        >
            <div >
                <Paper elevation={3}  className='paper'>  
                    <div  className='displaytitle'>
                        <div>
                            {props.data.title}
                        </div>
                        <div>
                            <IconButton ><PushPinOutlined /></IconButton>
                        </div>
                    </div>
                    <div  className='displaynote'>
                        {props.data.description}
                    </div>

                    <div >
                     {
                       props.TrashSection ?
                         <div className='trashicons'><IconButton aria-label="Trash" onClick={()=>{setTrash(props.data.noteID)} }>
                             <DeleteOutlineIcon/>
                            </IconButton>
                            <IconButton aria-label="Delete"  onClick={()=>{setDelete(props.data.noteID)} }>
                                <DeleteForeverIcon/>
                            </IconButton></div>
                        
                        :
                        <div  className='displayicons'>
                            <IconButton aria-label="Add Notification">
                                <NotificationAddOutlined />
                            </IconButton>
                            <IconButton aria-label="Color" >
                                <ColorLensOutlined />
                            </IconButton>
                            <IconButton aria-label="Image">
                                <ImageOutlined />
                            </IconButton>
                            <IconButton aria-label="Archive" onClick={()=>{setArchive(props.data.noteID)}}>
                                <ArchiveOutlined />
                            </IconButton>
                            <IconButton aria-label="Trash"  onClick={()=>{setTrash(props.data.noteID)} }>
                                    <DeleteOutlineIcon/>
                            </IconButton>
                            <IconButton aria-label="More Options">
                                <MoreVertOutlined />
                            </IconButton>
                            </div>
                        }
                    </div>
                </Paper>
            </div>
        </Box>
    );
}