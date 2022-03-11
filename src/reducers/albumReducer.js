export const albumReducer = (state = 0, action) => {    
    console.log('setting ', action.payload);
    switch (action.type) {
        case 'setAlbum':
          return action.payload;
        default: 
          return state; 
       }    
  };