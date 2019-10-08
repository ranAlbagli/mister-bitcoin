import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './ContactPage.style.scss'
import * as actions from '../../store/actions/contactActions'
import ContactList from '../../components/ContactList/ContactList.cmp'
import ContactFilter from '../../components/ContactFilter/ContactFilter.cmp'
import { MdAddCircleOutline } from "react-icons/md";


const ContactPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactReducer.contacts)

    useEffect(() => {
        (async () => {
            await dispatch(actions.getContacts())
        })();
    }, [])

    async function setFilter(filterBy) {
        await dispatch(actions.getContacts({ term: filterBy }))
    }
   
    return contacts && (
        <div>
            <div className="search-add"> 
            <ContactFilter setFilter={setFilter}></ContactFilter>
            <Link to="/edit" style={{ textDecoration: 'none' , color: 'black'}}>
            <MdAddCircleOutline size='4rem'/>
            </Link>
            </div>
            <ContactList contacts={contacts} />
        </div>)
}
export default ContactPage







