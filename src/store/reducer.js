import * as actionTypes from './actions';

const initialState = {
    persons: []
};
   
const reducer= (state= initialState, action) => {
    switch (action.type) {
       case actionTypes.ADD_PERSON:
           const newPerson = {
               id: Math.random(), //not really unique nut good enough
               name:action.personData.name,
               //age:Math.floor(Math.random() *40)
               age: action.personData.age
           }
           return {
             ...state,
             persons: state.persons.concat( newPerson )
           }
        case actionTypes.REMOVE_PERSON:
            return {
              ...state,
              persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
   return state; 
};

export default reducer;