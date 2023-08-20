import React from 'react'
import { useSelector } from 'react-redux'
import './contactDetails.scss'
import ContactWrapper from '../contactWrapper/ContactWrapper'

const ContactDetails = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
      contacts.length > 0 ? (
        <div className='contact-details'>
          <ContactWrapper data={contacts} />
        </div>
      ): (
        <div className='contact-details'>
          <h3>No Contacts Found</h3>
        </div>
      )
  )
}

export default ContactDetails