import React from 'react'
import './ContactFilter.style.scss'


const ContactFilter = ({ setFilter }) => {
    function handleInput(ev) {
        setFilter(ev.target.value)
    }

    return (
        <div className="demo">
            <div className="autosuggest-container search-input ">
            <input className="validate" type="text" placeholder="Search Contacts" onChange={handleInput}></input>
            </div>
        </div>
    )
}

export default ContactFilter