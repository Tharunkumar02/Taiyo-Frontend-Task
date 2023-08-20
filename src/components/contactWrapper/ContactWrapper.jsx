import React, { useState } from 'react'
import './contactWrapper.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../features/ContactSlice'
import EditContact from '../editContacts/editContact'

const ContactWrapper = ({ data }) => {
    const dispatch = useDispatch();
    const [editContact, setEditContact] = useState(null);

    const handleEditContact = (contact) => {
        setEditContact(contact);
    };

    const handleCloseEditForm = () => {
        setEditContact(null);
    };

    return (
        <div className='contact-wrapper'>
            {data?.map((item, index) => (
                <div key={index} className='container'>
                    <div className='contactDetails'>
                        <p>
                            <span className='detail-label'>First Name:</span> {item.firstName}
                        </p>
                        <p>
                            <span className='detail-label'>Last Name:</span> {item.lastName}
                        </p>
                        <p>
                            <span className='detail-label'>Company:</span> {item.company}
                        </p>
                    </div>
                    <div className='contactActions'>
                        <button className='edit' onClick={() => handleEditContact(item)}>
                            Edit
                        </button>
                        <button
                            className='delete'
                            onClick={() => dispatch(deleteContact({ id: item.id }))}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            {editContact && (
                <EditContact contact={editContact} onClose={handleCloseEditForm} />
            )}
        </div>
    );
};

export default ContactWrapper