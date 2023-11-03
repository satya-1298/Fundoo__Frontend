import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import InputBase from '@mui/material/InputBase';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AppsIcon from '@mui/icons-material/Apps';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import RefreshIcon from '@mui/icons-material/Refresh';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import keeps from '../Assets/keeps.png'
import '../Component/MiniStyle.css'
import { Circle, Scale } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
 
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    borderright:0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    marginRight:'-2',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const[anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    paddingLeft: '0px',
    width: '10%',
    height: '70%',
    marginTop: '10px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '10px '
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'grey',
    '& .MuiInputBase-input': {
       padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),

      // width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '80ch',
        height: '20px',
        

      }
    },
  }));

  const navigate = useNavigate();

  const signout = () => {
    if (localStorage.key) {
      localStorage.removeItem('Token');
      navigate("/")
    }
  }

  const selectOption=(option)=>{
     props.setCollection(option);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'white' }} >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
             
              
              marginLeft:-4

             
            }}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6"  style={{flexGrow:1,display:'flex',height:'40px'}}  >
          <img src={keeps} alt='Keep' width={'40px'} height={'40px'} marginLeft={8}></img>
          <h3 style={{color:'grey',marginTop:'0px',marginLeft:'3px', fontSize:'22px'}}>Fundoo</h3> 

          </Typography>
          <div style={{ marginLeft: 20 }}>
            <Search>
              <SearchIconWrapper color={'black'} >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
               placeholder='Search...'
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              justifyItems: 'center',
              paddingBottom:'20px',
              alignContent: 'center',
              color: 'black',
            }} />
            </Search>
          </div>
          <RefreshIcon
            sx={{
              marginLeft: 20, color: 'grey',
              
            }} />
          <ViewStreamOutlinedIcon
            sx={{
              marginLeft: 3, color: 'grey'
            }} />
          <SettingsOutlinedIcon
            sx={{
              marginLeft: 3, color: 'grey'
            }} />

          <AppsIcon
            sx={{
              marginLeft: 6,
              color: 'grey'
            }} />

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color='black'
          >
            <AccountCircle sx={{
              marginLeft: 1,
              // color: 'black',
              width: '200px'
            }} />
          </IconButton>
          <div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
             
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
              marginTop:'50px',
              height:'50px'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            width={'20px'}
            height={'200px'}
          >
            
            <MenuItem onClick={signout}>Logout</MenuItem>
          </Menu>
          </div>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  marginright= '60px'>
        <DrawerHeader >
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
       
        <List>
          {['Notes', 'Remainders', 'Edit', 'Archive', 'Trash'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', paddingTop:'5px', height: '15%'}}>
              <ListItemButton
                sx={{
                  //minHeight: 48,
                  display:'flex',
                  marginTop:'10px',
                  flexDirection: 'row',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 165, 0, 0.15)', 
                    borderRadius:'0px 30px 30px 0px',
                    
                  },
                  
                }}
               
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    height: '50%',
                    
                  }}
                >
                  {/* {index % 2 === 0 ? <LightbulbOutlinedIcon/>:<ArchiveIcon/> } */}
                  {index === 0 ? <LightbulbOutlinedIcon onClick={()=>selectOption("notes")}/> : ""}
                  {index === 1 ? <NotificationsOutlinedIcon /> : ""}
                  {index === 2 ? <EditIcon /> : ""}
                  {index === 3 ? <ArchiveIcon  onClick={()=>selectOption("archive")}/> : ""}
                  {index === 4 ? <DeleteIcon  onClick={()=>selectOption("trash")} /> : ""}

                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0  ,marginTop:'47px', }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


      </Drawer>

    </Box>
  );
}