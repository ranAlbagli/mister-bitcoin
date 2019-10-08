
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactService from '../../services/ContactService'
import { Link } from 'react-router-dom'
import * as actions from '../../store/actions/contactActions'
import { FaEdit, FaTrash, FaLongArrowAltLeft } from "react-icons/fa";
import './ContactDetailsPage.style.scss'

const ContactDetailsPage = ({ match }) => {
    const dispatch = useDispatch()
    const [contact, setContact] = useState('')
    // const contact=useSelector(state=>state.contactReducer.contact)

    useEffect(() => {
        (async () => {
            const contactId = match.params.id
            // dispatch(actions.getContact(contactId)) 
            const contact = await ContactService.getContactById(contactId)
            setContact(contact)
        })();
    }, [])


    function deleteContact() {
        dispatch(actions.deleteContact(contact._id))
    }


    return contact && (
        <div>
            <div className='options-container'>
            <Link to="/ContactPage" style={{ textDecoration: 'none', color: 'black' }}>
                <FaLongArrowAltLeft size='2rem'/>
            </Link>
            <Link to="/ContactPage" onClick={deleteContact} style={{ textDecoration: 'none', color: 'black' }}>
                <FaTrash size='2rem'/>
            </Link>
            <Link to={`/edit/${contact._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <FaEdit size='2rem' />
            </Link>
            </div>
            <div className="contact-details-container">
                <div className="contact-details">
                    <h1>{contact.name}</h1>
                    <h5>{contact.email}</h5>
                    <h5>{contact.phone}</h5>
                    <img src={`https://robohash.org/${contact.name}.png`} alt="" className="avatar"></img>

                </div>
            </div>
        </div>

    )

}

export default ContactDetailsPage

