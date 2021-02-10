import React,{useState,useEffect} from 'react'
import {Form ,Button, Row,Col, Container, Card, Alert} from 'react-bootstrap'
import {register} from '../action/userlogin'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
const Registeration = ({user}) => {

    
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [confirmpassword,setConfirmPassword]=useState('')
const [error,setError] =useState('')
  
const dispatch =useDispatch()
const history =useHistory()
console.log(user)
useEffect(()=>{

if(user){
  history.push('/')
}

},[])

const handleSubmit=(e)=>{
e.preventDefault()

if(password==confirmpassword){
  dispatch(register(name,email,password,confirmpassword))
 
}

else{
    
      setError('Passwords are not same')
    
      
           
}
console.log(error)


}
    return (
        <Container>
    
        <Row  className="justify-content-md-center  align-items-center mt-3">
         
         <Col md={6}>
    
         <h5 className='mt-3'>REGISTERATION</h5>
         <Form onSubmit={handleSubmit}>
         <Card className="p-4">
      {
          error && <Alert   variant="danger">{error}</Alert> 
      }
           
<Form.Group controlId="formBasicName">
 <Form.Label   >Name</Form.Label>
 <Form.Control

 required
 value={name}
 onChange={(e)=>setName(e.target.value)}
  type="name" placeholder="Enter name" />
</Form.Group>
<Form.Group controlId="formBasicEmail">
 <Form.Label>Email address</Form.Label>
 <Form.Control 
  required
  value={email}
 onChange={(e)=>setEmail(e.target.value)}
 type="email" placeholder="Enter email" />
</Form.Group>

<Form.Group controlId="formBasicPassword">
 <Form.Label>Password</Form.Label>
 <Form.Control 
  required
  value={password}
 onChange={(e)=>setPassword(e.target.value)}
 
 type="password" placeholder="Password" />
</Form.Group>
<Form.Group 
 required
controlId="formBasicPassword">
 <Form.Label> Confirm Password</Form.Label>
 <Form.Control 
   value={confirmpassword}
 onChange={(e)=>setConfirmPassword(e.target.value)}
 
  type="password" placeholder="Password" />
</Form.Group>

<Button variant="success" type="submit">
 Submit
</Button>

         </Card>


    
         </Form>
         </Col>
     </Row>
    
     
     
            
        </Container>
    )
}

export default Registeration
