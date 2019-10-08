import types from "../types";

export default function 
    contactsReducer(state = {contacts:[] , editedUser:null,currContact:null }, action) {      
    switch (action.type) {
        case types.FETCH_CONTACTS:
        return {...state , contacts: action.data}; 
        case types.EDIT_CONTACT:          
        return {...state , editedUser: action.data}; 
        case types.ETCH_CONTACT:          
        return {...state , currContact: action.data}; 
      default:
        return state;
    }
  }