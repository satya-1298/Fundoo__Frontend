import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton, Paper } from "@mui/material";

import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';

import './DashBoard.css'

import './NoteThree.css';

export default function NoteThree(props) {
console.log("getnote",props)

    const ArchiveNote=(id)=>
    {
        let archobj={
            noteId:id,
        }
        console.log(archobj)
        ArchiveNote(archobj).then
        ((response)=>
        {
            props.autoRefresh()
            console.log(response)
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    const TrashNote=(id)=>{
        let trasobj={
            noteId : id,
        }
        console.log(trasobj)
        TrashNote(trasobj).then((response)=>{
            props.autoRefresh()
            console.log(response)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const DeleteNote=(id)=>{
        let delobj={
            noteId : id,
        }
        console.log(delobj)
        DeleteNote(delobj).then((response)=>{
            props.autoRefresh()
            console.log(response)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        
        <Box className="Note3Box"
            sx={{
                 display: 'flex',
                 //justifyContent:'center',
                //  flexDirection: 'row',
                //flexWrap:'wrap',
                //padding: '35px',
                '& > :not(style)': {
                    m: 1,
                    //width:'50%',
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
                    <div className='displayicons'>
                    <IconButton aria-label="Add Notification">
                            <NotificationAddOutlined />
                        </IconButton>
                        <IconButton aria-label="Color" >
                            <ColorLensOutlined />
                        </IconButton>
                        <IconButton aria-label="Image">
                            <ImageOutlined />
                        </IconButton>
                        <IconButton aria-label="Archive" onClick={()=>{ArchiveNote(props.data.noteId)}}>
                            <ArchiveOutlined />
                        </IconButton>
                        <IconButton aria-label="More Options">
                            <MoreVertOutlined />
                        </IconButton>
                       
                    </div>
                </Paper>
            </div>
        </Box>
    );
}