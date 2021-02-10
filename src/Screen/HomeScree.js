import React ,{useState,useEffect}from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dropdown from '../components/Dropdown';
import { Avatar, useMediaQuery } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import {Link, NavLink, useHistory, useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'


const drawerWidth = 248;

const useStyles = makeStyles((theme) => ({

 
  root: {
    display: 'flex',

  },
  appBar: {
    zIndex: theme.zIndex.drawer +1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    
     
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(0) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(5) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar:{
      width:70,
      height:70,
      marginBottom:-28,
  }
  ,font:{
      fontSize:13,
      fontWeight:600,
      marginRight:8,
  }
  ,avatar_name:{
      fontSize:12
  }
  ,list:{
      
      marginTop:30,
      
  }
  ,icon:{
      color:'white',
       fontSize:13
  }
}));

export default function HomeScreen({active,user}) {
  const classes = useStyles();
  const theme = useTheme();
  

  const [open, setOpen] = React.useState(false);




  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const location =useLocation()
  const history =useHistory()
  const dispatch=useDispatch()
 
  const logoutHandler=()=>{
     dispatch({type:'LOGOUT'})
     history.push('/login')
  }

  // const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')))

//  const user= useSelector(state => state.auth?.authData)

  // const [USER,SETUSER] =useState(JSON.parse(localStorage.getItem('USERDATA')))
//  console.log(user)
//   useEffect(()=>{
//       const token=user?.token
//       SETUSER(JSON.parse(localStorage.getItem('profile')))
//  },[history,dispatch,location])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
         elevation={0}
        position="fixed"
        style={{
       
          background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)'

      


       


        
        
        }}
        
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
         <div style={{flex:1}}>

     
         <IconButton
           
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon  style={{fontSize:12 ,color:'#fff'}} />
          </IconButton>
         </div>
        
           <Dropdown user={user}  />
        </Toolbar>
      </AppBar>
      <Drawer
     
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
      <div style={{backgroundColor:'#212121',
      color:'#ffff'
      }}>
      <div className={classes.toolbar}>
        <Typography  className={classes.font}>
             STS STUDENT PORTAL
         </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon  
            
            style={{fontSize:15}}
             /> : <ChevronLeftIcon style={{fontSize:15   ,color:'#ffff'}} />}
          </IconButton>
        </div>
       {open   && <div className="cnic">
                  <div className="cnic1">
                   <Typography   className={classes.avatar_name}>Muzamil</Typography> 
                    <Typography 
                    className={classes.avatar_name}
                    
                    > {user?user.result.CNIC:null}  </Typography> 
                  </div>
                  <Avatar 
                className={classes.avatar}
                     
                  />
        </div>}
      </div>
      
        <div className="drawer_color">
        <Divider />
              <List className={classes.list}>
              <NavLink   
              
              
             to="/">

              <ListItem  button >
              <ListItemIcon> <DashboardIcon   className={classes.icon}   /></ListItemIcon>
              <ListItemText   primary="Active Projects" />
              </ListItem>
              </NavLink> 
             
              <ListItem button >
              <ListItemIcon> <CheckCircleIcon  className={classes.icon}         /></ListItemIcon>
              <ListItemText   primary="Applied Applications" />
              </ListItem>
              <ListItem     className={active && 'active'}   button >
              <ListItemIcon> <ChatIcon className={classes.icon}          /></ListItemIcon>
              <ListItemText   primary="Messages" />
              </ListItem>
              <ListItem button >
              <ListItemIcon> <OpenWithIcon className={classes.icon}            /></ListItemIcon>
              <ListItemText   primary="Announcement" />
              </ListItem>
      
        </List>
        <Divider />
        </div>

 
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
       
        </Typography>
        <Typography paragraph>
         in aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
    </div>
  );
}
