import React, { useState, useEffect } from 'react';
import {useDispatch } from 'react-redux'
import ContactService from '../../services/ContactService'
import * as actions from '../../store/actions/contactActions'
import './ContactEditPage.style.scss'

const ContactEditPage = ({ match, history }) => {
    const dispatch = useDispatch()
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: ''
    })
    useEffect(() => {
        (async () => {
            const contactId = match.params.id
            if (!contactId) return
            const contact = await ContactService.getContactById(contactId)
            console.log(contact);
            
            setContact(contact)
        })();
    }, [])

    function handleChange(e) {
        setContact({ ...contact, [e.target.name]: e.target.value });
        
    };

    async function handleSubmit(e) {
        e.preventDefault();        
        await dispatch(actions.editContact(contact))
        history.push('/ContactPage');
    };

    return (
        <div className="contact-edit-container">
        <div className="contact-edit">
        <form onSubmit={handleSubmit}>
            <input className="edit-input" type="text" name="name" onChange={handleChange} placeholder="Name" value={contact.name} />
            <input  className="edit-input" type="email" name="email" onChange={handleChange} placeholder="Email" value={contact.email} />
            <input  className="edit-input" type="text" name="phone" onChange={handleChange} placeholder="Phone Number" value={contact.phone} />
            <button>Save</button>
        </form>
        <img src={`https://robohash.org/${contact.name}.png`} alt=""></img>
     </div>
    </div>)
}

export default ContactEditPage
