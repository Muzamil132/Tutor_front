import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch=useDispatch()
  const history=useHistory()
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('USERDATA')))
  const logoutHandler=()=>{
    dispatch({type:'LOGOUT'})
    history.push('/')
 }
console.log(user)
//  const user = useSelector(state => state.auth)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <div className="dropdown"> 
    <Avatar 
     
  style={{fontSize:15,
  marginRight:'5px',
  width:'30px',
  height:'30px'
      }}
        />
 
      <Button 
      style={{fontSize:10,color:'#fff'}}
       aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {user?.result.name}
       </Button>
    </div>
            
 
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
         style={{fontSize:12}}
         onClick={handleClose}>{user?.result.admin?'Admin':'Profile'}</MenuItem>
      
        <MenuItem
         style={{fontSize:12}}
         
         onClick={handleClose}><Button   onClick={logoutHandler}>Logout</Button></MenuItem>
      </Menu>
    </div>
  );
}
