import * as actionTypes from './actions';

const initialState = {
   posts:
    {username:'yaso',   
    password:'123'
   }
   ,
 
};
const reducer = (state = initialState, action) => {
switch(action.type){
    case actionTypes.GET_USERNAME:
    return{
        ...state,
        posts:{
            ...state.posts,
            [action.myuserName]:state.posts[action.myuserName]
    }

        }

        default:
        return state;

    };
      
};



export default reducer;







