

import axios from 'axios'


const baseURL='http://localhost:5000'

export const register = (name, email,password,confirmpassword) => async (dispatch) => {

    console.log(name, email,password,confirmpassword)
    try {
    
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
  
      const { data } = await axios.put(`${baseURL}/user/register`
      
       ,
        { email, password,name},
        config
      )
      console.log(data)
  
      dispatch({
        type:'LOGIN',
        payload: data,
      })
  
     
    } catch (error) {
        console.log(error)
    }
  }


  
export const login = (email,password) => async (dispatch) => {



  console.log( email,password)
  try {
  

    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

    const { data } = await axios.put(`${baseURL}/user/login`
    
     ,
      { email, password},
      config
    )
    console.log(data)

    dispatch({
      type:'LOGIN',
      payload: data,
    })

   
  } catch (error) {
  const {message} =error.response.data
  

  
      dispatch({type:'LOGIN_FAILED',
        
         payload:message
    })
    
  }
}