import React from 'react'
import './header.scss'
import { useNavigate } from 'react-router'

const Header = () => {

    const navigate = useNavigate()
  return (
    <div className='contactSite'>
        <h3 onClick={() => navigate('/')}>Contacts Site</h3>
    </div>
  )
}

export default Header