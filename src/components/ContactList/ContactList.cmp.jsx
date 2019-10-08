import React from 'react';
import ContactPreview from '../ContactPreview/ContactPreview.cmp'
import './ContactList.style.scss'


const ContactList = ({ contacts }) => {
    return <div className="contacts-list">
        {contacts.map((currContact) => (
                <ContactPreview key={currContact._id} contact={currContact}></ContactPreview>
            
        ))}
    </div>
}

export default ContactList

