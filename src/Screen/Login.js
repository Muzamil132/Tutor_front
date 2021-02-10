import React,{useState,useEffect} from 'react'
import {Form ,Button, Row,Col, Container, Card, Alert, Nav} from 'react-bootstrap'
import { login } from '../action/userlogin'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { ButtonBase } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
const Login = ({setFalse}) => {

const dispatch = useDispatch()
 const history= useHistory()

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
// const [error,setError]=useState({})


const   {errors,authData,loading} =useSelector(state=>state.auth)

useEffect(()=>{
setError(errors)


},[errors,authData])
  
const handleSubmit=(e)=>{
  e.preventDefault()
  if(email,password ){

  dispatch(login(email,password))

 
  }


}

const create=()=>{
    setFalse(true)
}

    return (
        <div>
      
            <Container>
    <Row  className="justify-content-md-center  align-items-center mt-3">
     
     <Col md={6}>

     <h5 className='mt-3'>LOGIN</h5>
     <Form onSubmit={handleSubmit}>
     <Card className="p-4">

      {
          errors &&  <Alert variant="danger"  >{errors}</Alert>
      } 
   
<Form.Group controlId="formBasicEmail">
<Form.Label  >Email address</Form.Label>
<Form.Control 
value={email}
onChange={(e)=>setEmail(e.target.value)}
type="email" placeholder="Enter email" />
</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label >Password</Form.Label>
<Form.Control 
value={password}
onChange={(e)=>setPassword(e.target.value)}
type="password" placeholder="Password" />
</Form.Group>
<Button variant="success" type="submit">
LOGIN
</Button>

 <ButtonBase style={{marginTop:10}}  onClick={create}>Create Account</ButtonBase>

     </Card>
     </Form>
     </Col>
 </Row>   
    </Container> 

       
       
     
        </div>
    )
}

export default Login
