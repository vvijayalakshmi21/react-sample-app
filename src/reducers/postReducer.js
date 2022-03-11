export const postReducer = (state = 0, action) => {    
    switch (action.type) {
        case 'setPost':
          return action.payload;
        default: 
          return state;
       }     
};