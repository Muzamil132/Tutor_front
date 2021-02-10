import React from 'react'
import {  Box, Button, CardMedia, Container, Divider, Grid, Paper, Toolbar, Typography, useMediaQuery} from '@material-ui/core'
import { useTheme} from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
const NewProjectPost = ({date,description,Post,created,Project}) => {

    
  const theme =useTheme()
  const match=useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Paper
        className="jobpost"   
      style={{marginLeft:!match?'4%':null,
      marginTop:30 ,
      marginBottom:20
      }}> 
      <div className="jobheader">
          <Typography  
           className="headerFont"
          >GOVT OF SINDH</Typography>
        </div>
        <Grid container>
          <Grid item xs={12}  sm={3}
           style={{display:'flex',justifyContent:'center' ,alignItems:'center',padding:15}}
          
           >
           <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Coat_of_arms_of_Sindh_Province.svg/800px-Coat_of_arms_of_Sindh_Province.svg.png'
             style={{ width:'60%'}}
            alt=""/>
          </Grid>
          <Grid  xs={12}
                  sm={9}
          >
             <div className="postpoints">
             <Container>
             <Typography className="postheader  bg-warning mb-4 mt-4">
               {Project}
             </Typography>
             </Container>
            
             <Typography  className='fontSize px-3'>
              {description}
             </Typography>
              <Typography  className='px-3 fontSize  mb-2 mt-1'>
              Project posted on:    <span  className='text-muted' >{created}</span> 
            </Typography>
            <Typography className="no_of_post mb-2 px-3"  >
              No of Posts: {Post}
            </Typography>
            <Typography className="  py-1 mb-2 postheader ml-3 bg-danger text-light px-3"  >
                          { date}
            </Typography>
         </div>
            
          </Grid>
     </Grid>
     <Divider/>
     <div  className="d-flex justify-content-center " >
       <Button component={Link}
        to='/Stepper'
       style={{fontSize:"0.6rem",fontWeight:600}}
           >
          Apply
       </Button>
       <Button   
          style={{fontSize:"0.6rem ",fontWeight:600}}
       >
        Download Advertisements
       </Button>
     </div>
      </Paper>
    )
}

export default NewProjectPost
