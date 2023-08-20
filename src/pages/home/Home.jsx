import React from 'react'
import './home.scss'
import ContactForm from '../../components/contactForm/ContactForm'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='welcomeNote'>
        <h3>Welcome!!!</h3>
        <p>Add Your Favourite Contacts.</p>
      </div>
      <div className='contact-form'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Home