import types from "../types";
import contactService from "../../services/ContactService";



export const createAction = (data , type = '') => {
    return {
      type,
      data
    }
  };





  // -----------------------------------------------------------------------------
  export const getContacts = (term = '') => {
    return (dispatch) => {      
      return  contactService.getContacts(term)
        .then(response => {
          dispatch(createAction(response, types.FETCH_CONTACTS))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const deleteContact = (id) => {
    return (dispatch) => {
      return  contactService.deleteContact(id)
        .then(response => {
          dispatch(createAction(response))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  export const editContact = (editedContact) => {
    return (dispatch) => {
      return  contactService.saveContact(editedContact)
        .then(response => {
          dispatch(createAction(response , types.EDIT_CONTACT))
        })
        .catch(error => {
          throw(error);
        });
    };
  };

  export const getContact = (contactId) => {
    return (dispatch) => {
      return contactService.getContactById(contactId)
      // return  contactService.saveContact(editedContact)
        .then(response => {
          console.log(response);
          
          dispatch(createAction(response , types.FETCH_CONTACT))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
