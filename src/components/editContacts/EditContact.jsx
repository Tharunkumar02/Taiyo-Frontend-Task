import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../features/ContactSlice';
import './editContact.scss';

const EditContact = ({ contact, onClose }) => {
    const [editedContact, setEditedContact] = useState(contact);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleUpdateContact = () => {
        dispatch(updateContact(editedContact));
        onClose();
    };

    return (
        <div className='popup'>
            <div className='popup-content'>
                <h2>Edit Contact</h2>
                <form>
                    <label>First Name:</label>
                    <input
                        type='text'
                        name='firstName'
                        value={editedContact.firstName}
                        onChange={handleInputChange}
                    />
                    <label>Last Name:</label>
                    <input
                        type='text'
                        name='lastName'
                        value={editedContact.lastName}
                        onChange={handleInputChange}
                    />
                    <label>Company:</label>
                    <input
                        type='text'
                        name='company'
                        value={editedContact.company}
                        onChange={handleInputChange}
                    />
                    <div className='button-container'>
                        <button type='button' onClick={handleUpdateContact}>
                            Update
                        </button>
                        <button type='button' onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditContact;
