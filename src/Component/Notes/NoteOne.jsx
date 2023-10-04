import {React, useState}  from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {TextField} from '@mui/material';
import { BrushOutlined, CheckBoxOutlined, ImageOutlined } from '@mui/icons-material';

export default function NoteOne({handleToggle}) {
 return (

    <Box
        sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
            marginTop: '10px',
                 '& > :not(style)': {
                        m: 1,
                     width: '75ch',
                     height: '5ch',
                     },
                 }}
             >
            <Paper elevation={3} onClick={handleToggle}>
             <div
                 style={{
                 cursor: 'text',
                 margin: '1ch',
                 color: 'grey',
                 fontSize: '2ch',
                 display: 'flex',
                 justifyContent: 'space-between',

                }}>
                <TextField
                    type='text'
                    required
                    variant='standard'
                    placeholder=" Take a Note...."
                    InputProps=
                    {{
                        disableUnderline: true,
                        style: {
                         border: 'none',
                        outline: 'none',
                        width: '100%',
                        textDecoration: 'none',
                        textAlign:'center',
                        height:'20px',
                        },
                    }}

                />              
                 <div style={{
                 display: 'flex',
                     justifyContent: 'space-between',
                     rowGap: '0.5px',
                     }}>
                <CheckBoxOutlined style={{ marginRight: '3ch' }} />
                 <BrushOutlined style={{ marginRight: '3ch' }} />
                 <ImageOutlined />
                 
            </div>
        </div>
     </Paper>
     </Box>
  );
}