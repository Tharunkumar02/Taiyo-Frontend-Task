import React from 'react'
import ContactDetails from '../../components/contactDetails/ContactDetails'
import './contacts.scss'

const Contacts = () => {
    return (
        <div className='contacts'>
            <h3>Contacts</h3>
            <div className='contactDetails'>
                <ContactDetails />
            </div>
        </div>
    )
}

export default Contacts