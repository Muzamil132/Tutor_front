import {  Box, Button, CardMedia, Container, Divider, Grid, Paper, Toolbar, Typography, useMediaQuery} from '@material-ui/core'
import { useTheme} from '@material-ui/core/styles'
import {useState,useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar';
import React from 'react'
import NewProjectPost from '../components/NewProjectPost';
import axios from 'axios'
import {useSelector} from 'react-redux'
const NewProjects = ({user}) => {
const [postdata,setPostData]=useState([])

const usser=useSelector(state=>state.auth)

 console.log(user)
useEffect(()=>{
 
  if(user){
    const Fetchdata =async()=>{
      const {data}=await axios.get('http://localhost:5000/Post')
      setPostData(data)

  

   
        
   }


   Fetchdata()

  }
  

  
 
},[])
console.log(postdata)

  const theme =useTheme()
  const match=useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div>
        {
          user!==null? 

          <div>
          <Grid justify='center'   className='gradient' container>
     
     <Grid    
    >
      <Box  py={2} px={1}>
      <Typography className="text-center pt-4"  style={{fontSize:'2rem'}}  variant="h4">
         WELCOME TO STC CANDIDATES PORTAL
     </Typography> 
       <Typography className="text-center py-2"  style={{fontSize:'0.8rem'}}  >

          Apply on the latest projects of government and private sector organizations and build your career with us!
       </Typography>  
  
      </Box>
      <div  className="d-flex justify-content-center align-items-center pb-4">
      <Button   
       disableElevation
       
        style={{
          color:'#fff',
          backgroundColor:'#32de84'
          
        }}
       variant="contained">How To Apply</Button>
      </div>
      
       </Grid>

     </Grid>
       <Container>
       {
         postdata.map(post=>(

          <NewProjectPost  date={post.date} 
                           description={post.description}
                           Project={post.Project}
                           Post={post.Post}
                           created={post.createdAt}

                                                  />
         ))
       }
 
  
       </Container>   
     
          </div>:null
          


        }
    
    
       
        </div>
    )
}

export default NewProjects
