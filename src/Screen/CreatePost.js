import { Card, colors, Container, Grid, Paper, TextField, Typography, useMediaQuery } from '@material-ui/core'
import React,{useState} from 'react'
import { makeStyles,useTheme} from '@material-ui/core/styles'
import { Col, Row } from 'react-bootstrap'
import {DrawerExample} from '../components/Falto'
import { Button,Textarea } from "@chakra-ui/react"
import axios from 'axios'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
  } from "@chakra-ui/react"
import MaterialUIPickers from '../components/DatePicker'
const CreatePost = () => {
   const [Project,setProject]=useState('')
   const [Post,setPost]=useState(null)
   const [description,setDescription]=useState('')
   const [date,setDate]=useState('')
   
    const useStyles=makeStyles((theme)=>({
          typo:{
             color:'red',
             [theme.breakpoints.down("sm")]:{
               color:'green'
             }
          }

    }))
       

     
  const them=useTheme()
  const match =useMediaQuery(them.breakpoints.down('sm'))

    
    const classes=useStyles()

    const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log(Project,Post,date,description)

      const {data}=await axios.put('http://localhost:5000/Post/CreatePost',{
        Project,Post,date,description
      })
      console.log(data)
      setProject('')
      setDescription('')
      setDate('')
      setPost(null)
     }


    return (
         
        
        <div className="create_post"   > 
            <Grid container
              justify='center'
             >
           
            <Box
               borderWidth='1px'
               borderRadius="lg"
               backgroundColor='#f6f9fc'
              p={5}>
              
              <form    onSubmit={handleSubmit} >
              <FormControl id="email">
               <FormLabel   style={{fontSize:'0.8rem'}}   >Department</FormLabel>
              <Input   required  value={Project}   onChange={(e)=>{setProject(e.target.value)}} variant="filled" size="sm"  />
               </FormControl>
              <FormControl id="email">
               <FormLabel  style={{fontSize:'0.8rem'}}  >No of Posts</FormLabel>
              <Input     required    value={Post}   onChange={(e)=>{setPost(e.target.value)}}   variant="filled" size="sm"   />
               </FormControl>
              <FormControl id="email">
            
               </FormControl>

               <FormLabel style={{fontSize:'0.8rem'}} >Project Description</FormLabel>
               <Textarea
                 required 
                value={description}   onChange={(e)=>{setDescription(e.target.value)}}
               
                size="sm"
                variant='filled'
              />
              <MaterialUIPickers date={date}
                                 setDate={setDate}
                 />
                <Button type='submit' mt={3}  isFullWidth  colorScheme="teal" size="sm">
                 CREATE POST
               </Button>
              </form>
             
              </Box>     
            </Grid>
        </div>
    )
}

export default CreatePost
