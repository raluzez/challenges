import * as actionTypes from "./actions";

const initialState = {
    persons:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) { // type is expected from redux package
        case actionTypes.ADD_PERSON:
                const newPerson = {
                    id: Math.random(), // not really unique but good enough here!
                    name: action.name,
                    age: action.age
                }
                return {
                    ...state,
                    persons:state.persons.concat(newPerson)
                }
        case actionTypes.DELETE_PERSON:
            const newPersonsArray = state.persons.filter(person => person.id !== action.personId)
            return {
                ...state,
                persons:newPersonsArray
            }
    }
    return state
}

export default reducer