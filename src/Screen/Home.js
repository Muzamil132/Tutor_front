import React,{useState,useEffect} from 'react'
import { Button, Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {useHistory} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'


const Home = () => {
    const location =useLocation()
    const history =useHistory()
    const dispatch=useDispatch()
   
    const logoutHandler=()=>{
       dispatch({type:'LOGOUT'})
       history.push('/login')
    }

    // const [user,setUser] =useState(JSON.parse(localStorage.getItem('profile')))

   const user= useSelector(state => state.auth?.authData)

    const [USER,SETUSER] =useState(JSON.parse(localStorage.getItem('profile')))
   console.log(user)
    useEffect(()=>{
        const token=user?.token
        SETUSER(JSON.parse(localStorage.getItem('profile')))
   },[history,dispatch,location])
    return (
        <div>
        <>



 
  <Navbar  className=" navbar" bg="light" variant="light">

    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Container>
    <Nav className="ml-auto">

    {

        !user && !USER?  <LinkContainer to='/login'>
     <Nav.Link>SIGN IN</Nav.Link>           
      </LinkContainer>:<NavDropdown  title={user?user.result.name :  USER.result.name}>
      <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>

      </NavDropdown>
    }
  

   
    </Nav>
    </Container>
  
    
  </Navbar>
</>
            
        </div>
    )
}

export default Home
