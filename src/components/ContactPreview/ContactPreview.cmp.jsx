import React from 'react';
import { Link } from 'react-router-dom'
import './ContactPreview.style.scss'


const ContactPreview = ({ contact }) => {
    return (
        <div className="contact-preview-container">
            <div className="contact-preview">
                <Link to={`/contact/${contact._id}`} style={{ textDecoration: 'none' , color: 'black'}}>
                    <p className="card-title">{contact.name}</p>
                    <img src={`https://robohash.org/${contact.name}.png`} alt=""></img>
                </Link>
            </div>
        </div>
    )
}
export default ContactPreview;