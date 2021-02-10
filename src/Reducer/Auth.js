const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
      case 'LOGIN':
        localStorage.setItem('USERDATA', JSON.stringify(action?.payload ));
           console.log(action.payload)
        return { ...state, authData: action.payload, loading: false, errors: null };
      case 'LOGOUT':
        localStorage.clear();
  
        return { ...state, authData: null, loading: true, errors: null };
      case'LOGIN_FAILED': 
        console.log(action.payload)
        return {...state,errors:action.payload,authData:null}
      default:
        return state;
    }
  };

  
  export default authReducer