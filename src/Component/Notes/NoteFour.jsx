import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton, Paper } from "@mui/material";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsPausedOutlinedIcon from '@mui/icons-material/NotificationsPausedOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import './DashBoard.css'

import './NoteThree.css';

export default function NoteThree(props) {
console.log("getnote",props)
    
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
            <div>
                <Paper elevation={4}  className='paper'>  
                    <div  className='displaytitle'>
                        <div>
                            {props.data.title}
                        </div>
                        <div>
                            <IconButton ><PushPinOutlinedIcon /></IconButton>
                        </div>
                    </div>
                    <div  className='displaynote'>
                        {props.data.description }
                    </div>
                    <div className='displayicons'>
                        <div className='NotifiIcon'><IconButton ><NotificationsPausedOutlinedIcon /></IconButton></div>
                        <div className='PersonIcon'><IconButton><PersonAddAltOutlinedIcon /></IconButton></div>
                        <div className='PaletIcon'><IconButton><PaletteOutlinedIcon /></IconButton></div>
                        <div className='ArchIcon'><IconButton  ><ArchiveOutlinedIcon /></IconButton></div>
                        <div className='DeleteIcon'><IconButton  ><DeleteOutlinedIcon /></IconButton></div>
                        <div className='MoreIcon'><IconButton ><MoreVertOutlinedIcon /></IconButton></div>
                    </div>
                </Paper>
            </div>
        </Box>
    );
}