import React, { useState, useRef } from 'react';
import './contactForm.scss';
import ContactWrapper from '../contactWrapper/ContactWrapper';
import { addContact } from '../../features/ContactSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.contacts);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    const contactTwo = contacts.length > 0 ? contacts.slice(-2).reverse() : [];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!event.target.checkValidity()) return
        const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
        dispatch(
            addContact({
                id: newId,
                firstName: firstName,
                lastName: lastName,
                company: company
            })
        );

        closeModal();
    };

    return (
        <div className='contactForm'>
            <div className='addcontact'>
                <button onClick={openModal}>Add Contact</button>
            </div>
            {
                contacts.length > 0 ? (
                    <div className='recent-contacts'>
                        <h4>Recently Added</h4>
                        <ContactWrapper data={contactTwo} />
                    </div>
                ) : (
                    <div className='recent-contacts'>
                        <h4>No Contacts Added</h4>
                    </div>
                )
            }

            {isModalOpen && (
                <div className='modal-overlay' onClick={handleClickOutside}>
                    <div className='modal' ref={modalRef}>
                        <div className='modal-content'>
                            <h2>Add Contact</h2>
                            <form onSubmit={handleSubmit}>
                                <label>First Name:</label>
                                <input type='text' placeholder='First Name' required onChange={(e) => setFirstName(e.target.value)} />
                                <label>Last Name:</label>
                                <input type='text' placeholder='Last Name' required onChange={(e) => setLastName(e.target.value)} />
                                <label>Company:</label>
                                <input type='text' placeholder='Company' required onChange={(e) => setCompany(e.target.value)} />
                                <div className='button-container'>
                                    <button type='submit' onClick={handleSubmit}>Save</button>
                                    <button type='button' onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
