import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import { CreateNote } from '../../Services/NoteServices';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import './NoteTwo.css';


export default function NoteTwo(props) {
    const [data, setData] = useState({
        Title: '',
        Description: '',
        BackGround: '',
        IsArchive: false,
        IsTrash: false,
    });

    const getTitle = (e) => {
        setData(prevState => ({
            ...prevState,
            Title: e.target.value
        }))
    }

    const getDescription = (e) => {
        setData(prevState => ({
            ...prevState,
            Description: e.target.value
        }))
    }
    const submitData = () => {
        CreateNote(data).then((response) => {
            console.log(response)

        }).catch((error) => {
            console.log(error);
        })
    }

    return (

        <Box
            sx={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                // paddingTop: '9px',
                // height: '70px',
                // width: '100%',
                // marginTop: '170px',
                // marginBottom: '9px',
                // paddingBottom: '98px'
                marginTop: '90px',
                '& > :not(style)': {
                       m: 1,
                    width: '75ch',
                    height: 'auto',
                    },
            }}

        >

            <Paper
                className='Paper.s'
                sx={{
                    width: '70ch',
                //     display: 'flex',
                //     flexDirection: 'column',
                //     alignItems: 'left',
                    padding: '1ch',
                //     borderRadius: '10px',
                //     boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', // Add a thicker box shadow here
                //     border: 'none',// Remove the border from the Paper
                     height: 'auto',
                //     paddingBottom: 'vh',

                 }}
            >
                {/* <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px', // Add some margin for spacing
                    height:'auto' */}
            
                <div className='title'>
                    <TextField
                        required
                        variant='standard'
                        placeholder="Title..."
                        // value={input.title}
                        onChange={getTitle}
                        InputProps=
                        {{
                            disableUnderline: true,
                            style: {
                                border: 'none',
                                outline: 'none',
                                width: '100%',
                                textDecoration: 'none',
                                height:'auto'
                            },
                        }}

                    /><IconButton aria-label="Pin Note">
                        <PushPinOutlined />
                    </IconButton>
                </div>
                <div className='description'>
                <TextField
                    multiline
                    required
                    variant='standard'
                    placeholder="Take a note..."

                    onChange={getDescription}
                    InputProps={{
                        disableUnderline: 'true',
                        style: {
                            display:'flex',
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            height: 'auto'
                        },
                    }}
                />
                </div>
                <div
                className='buttons'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        rowGap: '0.5px',
                        height: 'auto'
                    }}
                >
                    <IconButton aria-label="Add Notification">
                        <NotificationAddOutlined />
                    </IconButton>
                    <IconButton aria-label="Color" >
                        <ColorLensOutlined />
                    </IconButton>
                    <IconButton aria-label="Image">
                        <ImageOutlined />
                    </IconButton>
                    <IconButton aria-label="Archive">
                        <ArchiveOutlined />
                    </IconButton>
                    <IconButton aria-label="More Options">
                        <MoreVertOutlined />
                    </IconButton>
                    <IconButton aria-label="Undo">
                        <UndoOutlined />
                    </IconButton>
                    <IconButton aria-label="Redo">
                        <RedoOutlined />
                    </IconButton>


                    <Button
                        type="submit"
                        onClick={() => {
                            if (data.Title !== "") {
                                console.log("Hello")
                                submitData();
                            }
                            props.handleToggle();
                        }}
                        // onClick={( ) => { props.handleToggle()}}
                        style={{ border: 'none', backgroundColor: 'none', color: 'grey', textTransform: 'lowercase', fontWeight: 'bolder' }}

                    >
                        Close
                    </Button>

                </div>

            </Paper>

        </Box>




    );

}