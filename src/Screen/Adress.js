import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box, Card, Container, Grid, InputAdornment, makeStyles, MenuItem, useMediaQuery, useTheme } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { ClassNames } from '@emotion/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GridOnIcon from '@material-ui/icons/GridOn';
import DatePickers from '../components/DatePicker';
import CheckoutSteps from '../components/Stepper';
import {district,tulka} from '../components/Geographicaldata'
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

export const Adress = ({user}) => {

  const {_id} =user?.result


    // const district = ['Badin','Central Karachi','Dadu','East Karachi','Ghotki','Hyderabad','Jacobabad','Jamshoro','Kashmore','Khairpur','Korangi Karachi','Larkana','Malir Karachi','Matiari','Mirpurkhas','Naushahro Feroze','Qambar Shahdadkot','Sanghar','Shaheed Benazirabad','Shikarpur','South Karachi','Sujawal','Sukkur','Tando Allahyar','Tando Muhammad Khan','Tharparkar','Thatta','Umerkot','West Karachi'];


  const useStyles =makeStyles((theme)=>({
    icon:{
      color:'lightgray'
    }

  }))
const personallocaldata =localStorage.getItem('personaldata')?JSON.parse(localStorage.getItem('personaldata')):{}
console.log(personallocaldata)
  const classes =useStyles()
  const formik = useFormik({
    initialValues :user?user?.result:{
      district: "",
      Tulka:"",
     
      domicile_date:'',
      place_of_posting:'',
      Adress:"",
      Adress_cnic:"",

        },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
    
      console.log(values)
      
      localStorage.setItem('personaldata',JSON.stringify(values))
      const {data}= await axios.put('http://localhost:5000/user/',{
        values
        ,_id
         })
    },
  });


  const Religion =['Muslims','Non-Muslims']
  const Gender =['Male','Female','Other']

  const theme =useTheme()
  const match =useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
    <Container>
    <CheckoutSteps  step1 step2/>
    <form onSubmit={formik.handleSubmit}>
      <Grid container   justify='center' component={Card}>
     
        <Grid  style={{paddingTop:15,padding:15}} item sm={5}  xs={12}  >
        <Box p={1} >
       <TextField
          id="Select"
          select
          fullWidth
          size="small"
          variant='outlined'
          label="Domicile tulka"
          name='Tulka'
          value={formik.values.Tulka}
          onChange={formik.handleChange}
          
        >
          {tulka.map((option,value) => (
            <MenuItem key={value} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
       </Box>


       

      
      
      
      
       <Box p={1} >
       <TextField
        required 
       size="small"
        id="date"
        fullWidth
        label='Date of Domicile issue'
        type="date"
        variant="outlined"
        name='domicile_date'
        
        onChange={formik.handleChange}
        value={formik.values.domicile_date}
       
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
          label="Domicile distrcit"
          name='district'
          value={formik.values.district}
          onChange={formik.handleChange}
          
        >
          {district.map((option,value) => (
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
          label="Place of posting?"
          name='place_of_posting'
        
          onChange={formik.handleChange}
          value={formik.values.place_of_posting}
        >
          {tulka.map((option,value) => (
            <MenuItem key={value} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
       </Box>
      
      
  
        </Grid>
        <div style={{width:!match?'79%':'88%',marginTop:15}}  >
        <div style={{marginTop:15}}>
        <TextField
         
         fullWidth
         variant='outlined'
         size="small"
         id="Adress_cnic "
         name="Adress_cnic"
         label="Adress written on Cnic"
         value={formik.values.Adress_cnic}
         onChange={formik.handleChange}
         error={formik.touched.Adress_cnic && Boolean(formik.errors.Adress_cnic)}
         helperText={formik.touched.Adress_cnic && formik.errors.Adress_cnic}
       /> 
        </div>
        <div style={{marginTop:15}}>
        <TextField
         
         fullWidth
         variant='outlined'
         size="small"
         id="Adress "
         name="Adress"
         label="Postal Adress"
         value={formik.values.Adress}
         onChange={formik.handleChange}
         error={formik.touched.Adress && Boolean(formik.errors.Adress)}
         helperText={formik.touched.Adress && formik.errors.Adress}
       /> 
        </div>
         <div  style={{marginLeft:-15}}    >
         <Button  to='/Stepper' style={{margin:15,backgroundColor:'#fff',color:'#3f51b5'}} color="primary" variant="contained" size='small'component={Link}>
          BACK
        </Button> 
         <Button style={{margin:15}} color="primary" variant="contained" size='small' type="submit">
          SAVE
        </Button> 
        <Button  to='/Education' style={{margin:15,backgroundColor:'#fff',color:'#3f51b5'}} color="primary" variant="contained" size='small'component={Link}>
          NEXT
        </Button>
         </div>
      
        </div>
      
      </Grid>

      </form>
    </Container>
     
    </div>
  );
};


