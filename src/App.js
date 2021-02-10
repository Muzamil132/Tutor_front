import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Registeration from './Screen/Registeration';
import Login from './Screen/Login';
import Home from './Screen/Home';
import HomeScreen from './Screen/HomeScree';
import NewProjects from './Screen/NewProjects';
import CreatePost from './Screen/CreatePost';
import {Adress} from './Screen/Adress';
import { Button, ButtonGroup } from "@chakra-ui/react"
import {useState} from 'react'

import CheckoutSteps from './components/Stepper';
import { PersonalInformation} from './Screen/PersonalInformation';
import {useSelector} from 'react-redux'
function App() {

  const result= JSON.parse(localStorage.getItem('USERDATA'))
  console.log(result)
  const user =useSelector(state=>state.auth)
  console.log(user)
  const [False,setFalse]=useState(false)
  const submit =async()=>{
    //  const {data}=await axios.put('http://localhost:5000/register',{
    //    email:'muzamil098',password:'67898trt'
    //  })
  
     const {data}=await axios.put('http://localhost:5000/user/register',{email:'muzamil06785@',password:'1234rf'})
     console.log(data)
  }
  return (
    <div className="App">

   
    <Router>

    {
      (result || user.authData!==null) && <HomeScreen user={result}   />
    }
     
  
   <Switch>

  
   <Route    
    path="/CreatePost"
     component={CreatePost}

   />
   {
     result &&   <Route    
    path="/Adress"
   

   ><Adress  user={result}/></Route>
   }
 



  

<Route    
   exact  path="/"
   >

   {
     result?<NewProjects user={result}/>:  <div>{ !False?<Login  setFalse={setFalse}/>  :<Registeration/>}</div>
   } 
   </Route>

   
  {
    result &&
    <Route    
    path="/Stepper"
   >
     <PersonalInformation  user={result}/>
   </Route> 
  }
   

   
      </Switch>
    </Router>
  
    </div>
  );
}

export default App;
