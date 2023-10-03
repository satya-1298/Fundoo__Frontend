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
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
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



export default function MiniDrawer() {
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
    paddingLeft: '12px',
    width: '100%',
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

      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '90ch',
        height: '25px',

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
              marginRight: 8
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={keeps} alt='Keep' width={'40px'} height={'40px'} marginRight={4}></img>
          <Typography variant="h6" noWrap component="div" color={'grey'} position={'relative'} top={'3vh'}  >
           <b>Fundoo</b> 
          </Typography>
          <div style={{ marginLeft: 30 }}>
            <Search>
              <SearchIconWrapper>
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
              marginLeft: 20, color: 'grey'
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
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            width={'20px'}
            height={'100px'}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={signout}>Logout</MenuItem>
          </Menu>
          </div>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Notes', 'Remainders', 'Edit', 'Label', 'Trash'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', paddingTop:'20px' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  display:'flex',
                  marginTop:'2px',
                  flexDirection: 'row',
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                   
                  }}
                >
                  {/* {index % 2 === 0 ? <LightbulbOutlinedIcon/>:<ArchiveIcon/> } */}
                  {index === 0 ? <LightbulbOutlinedIcon /> : ""}
                  {index === 1 ? <NotificationsOutlinedIcon /> : ""}
                  {index === 2 ? <EditIcon /> : ""}
                  {index === 3 ? <ArchiveIcon /> : ""}
                  {index === 4 ? <DeleteIcon /> : ""}

                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


      </Drawer>

    </Box>
  );
}