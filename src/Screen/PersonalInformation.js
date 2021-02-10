import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box, Card, Container, Grid, InputAdornment, makeStyles, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { ClassNames } from '@emotion/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GridOnIcon from '@material-ui/icons/GridOn';
import DatePickers from '../components/DatePicker';
import CheckoutSteps from '../components/Stepper';
import { Link } from 'react-router-dom';
import axios from 'axios'

const validationSchema = yup.object({
  Name: yup
    .string('Enter your email')
    
    .required('Name is required'),
  Mobile_Number: yup
    .number('Enter your Mobile Number')
    .min(11, 'number should be of minimum 11 characters length')
    .required('Number is required'),
    
  CNIC: yup
    .number('Enter your CNIC')
    .min(13, 'number should be of minimum 13 characters length')
   
    .required('Password is required'),
});

export const PersonalInformation = ({user}) => {
console.log(user)
 const {_id} =user?.result
  const useStyles =makeStyles((theme)=>({
    icon:{
      color:'lightgray'
    }

  }))
const personallocaldata =localStorage.getItem('personaldata')?JSON.parse(localStorage.getItem('personaldata')):{}
console.log(personallocaldata)
  const classes =useStyles()
  const formik = useFormik({
    initialValues :user?user.result:

       {
      name: "",
      Mobile_Number:"",
      email:"",
      Gaurdian:"",
      CNIC:'',
      
      religion:'',
      disability:'',
      Gender:'',
      servant:'',
       Center:'',

        },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
    
     
      localStorage.setItem('personaldata',JSON.stringify(values))

      const {data}= await axios.put('http://localhost:5000/user/',{
        values
        ,_id
         })
    },
  });


  const Religion =['Muslims','Non-Muslims']
  const Gender =['Male','Female','Other']

  return (
    <div>
    <Container>
    <CheckoutSteps  step1 step2/>
    <form onSubmit={formik.handleSubmit}>
      <Grid container   justify='center' component={Card}>
     
        <Grid  style={{paddingTop:15,padding:15}} item sm={5}  xs={12}  >
       <Box p={1} >
       <TextField
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <AccountCircleIcon  className={classes.icon}  />
            </InputAdornment>
          ),
        }}
           value={personallocaldata.Name}
          fullWidth
          variant='outlined'
          size="small"
  email
          name="name"
          label="name"
          value={formik.values.name}
         
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
       </Box>

      
       <Box p={1} >
       <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <PhoneAndroidIcon className={classes.icon} />
            </InputAdornment>
          ),
        }}
          fullWidth
          variant='outlined'
          size="small"
          id="Mobile_Number"
          name="Mobile_Number"
          label="Mobile Number"
          value={formik.values.Mobile_Number}
        
          onChange={formik.handleChange}
          error={formik.touched.Mobile_Number && Boolean(formik.errors.Mobile_Number)}
          helperText={formik.touched.Mobile_Number && formik.errors.Mobile_Number}
        />
       </Box>

      
       <Box p={1} >
       <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <MailOutlineIcon className={classes.icon}  />
            </InputAdornment>
          ),
        }}
          fullWidth
          variant='outlined'
          size="small"
          id="email"
          name="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
       </Box>
       <Box p={1} >
       <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <GridOnIcon className={classes.icon}  />
            </InputAdornment>
          ),
        }}
          fullWidth
          variant='outlined'
          size="small"
          id="CNIC "
          name="CNIC"
          label="CNIC Number"
          value={formik.values.CNIC}
          onChange={formik.handleChange}
          error={formik.touched.CNIC && Boolean(formik.errors.CNIC)}
          helperText={formik.touched.CNIC && formik.errors.CNIC}
        />
       </Box>
       <Box p={1} >
       <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <AccountCircleIcon className={classes.icon}  />
            </InputAdornment>
          ),
        }}
          fullWidth
          variant='outlined'
          size="small"
          id="Gaurdian"
          name="Gaurdian"
          label="Gaurdian Name"
          value={formik.values.Gaurdian}
          onChange={formik.handleChange}
          error={formik.touched.Gaurdian && Boolean(formik.errors.Gaurdian)}
          helperText={formik.touched.Gaurdian && formik.errors.Gaurdian}
        />
       </Box>
       <Box p={1} >
       <TextField
        required 
       size="small"
        id="date"
        fullWidth
        label='Date of Birth'
        type="date"
        variant="outlined"
        name='date'
        
        onChange={formik.handleChange}
      
       
        InputLabelProps={{
          shrink: true,
        }}
      />
           </Box>

      
  
        </Grid>
        <Grid  style={{paddingTop:15,padding:15}} item sm={5}  xs={12}  >
       <Box p={1} >
       <TextField
          id="Select"
          select
          fullWidth
          size="small"
          variant='outlined'
          label="Gender"
          name='Gender'
          value={formik.values.Gender}
          onChange={formik.handleChange}
          
        >
          {Gender.map((option,value) => (
            <MenuItem key={value} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
       </Box>

      
       <Box p={1} >
       <TextField
          id="Select"
          select
          fullWidth
          size="small"
          variant='outlined'
          label="Religion"
          name='religion'
          value={formik.values.religion}
          onChange={formik.handleChange}
          
        >
          {Religion.map((option,value) => (
            <MenuItem key={value} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
       </Box>
       <Box p={1} >
       <TextField
          id="Select"
          select
          fullWidth
          size="small"
          variant='outlined'
          label="Are you government servant?"
          name='servant'
          value={formik.values.servant}
          onChange={formik.handleChange}
          
        >
          {['Yes','No'].map((option,value) => (
            <MenuItem key={value} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
       </Box>
       <Box p={1} >
       <TextField
          id="Select"
          select
          fullWidth
          size="small"
          variant='outlined'
          label="Any disability?"
          name='disability'
        
          onChange={formik.handleChange}
          value={formik.values.disability}
        >
          {['Yes','No'].map((option,value) => (
            <MenuItem key={value} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
       </Box>
       <Box p={1} >
       <TextField
          id="Select"
          select
          fullWidth
          size="small"
          variant='outlined'
          label="Test Center"
          name='Center'
          value={formik.values.Center}
        
          onChange={formik.handleChange}
          
        >
          {['Karachi','Sukkur','Hyderabad'].map((option,value) => (
            <MenuItem key={value} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
       </Box>

      
       {/* <Box p={1} >
       <TextField
          fullWidth
          variant='outlined'
          size="small"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
       </Box> */}

      
        <Button style={{margin:15}} color="primary" variant="contained" size='small' type="submit">
          SAVE
        </Button>
       
        <Button to='/Adress'  component={Link} style={{margin:15}} color="primary" variant="contained" size='small'>
          NEXT
        </Button>
       
  
        </Grid>
       
      </Grid>
      </form>
    </Container>
     
    </div>
  );
};


