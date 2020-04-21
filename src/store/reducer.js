import * as actionTypes from './actions';

const initialState = {
    persons: []
};
   
const reducer= (state= initialState, action) => {
    switch (action.type) {
       case actionTypes.ADD_PERSON:
           return {

           }
        case actionTypes.REMOVE_PERSON:
            return {

            }
    }
   return state; 
};

export default reducer;