export const PostReducer = (state = [], action) => {
    switch (action.type) {
      case 'SAVEPOSTS':
       
           console.log(action.payload)
        return [...state,action.payload]
    
      default:
        return state;
    }
}