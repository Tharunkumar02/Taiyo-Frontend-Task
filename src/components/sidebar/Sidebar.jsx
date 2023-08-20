import React from 'react'
import './sidebar.scss'
import { useNavigate } from 'react-router'

const Sidebar = () => {

    const navigate = useNavigate()
  return (
    <div className='sidebar'>
        <div className="sidebar-contacts" onClick={() => navigate('contacts')}>
            <span>Contacts</span>
        </div>
        
        <div className="sidebar-charts" onClick={() => navigate('chart')}>
            <span>Charts</span>
        </div>
    </div>
  )
}

export default Sidebar