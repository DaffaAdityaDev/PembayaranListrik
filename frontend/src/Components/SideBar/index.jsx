import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

function SideBar() {
    const currentUrl = window.location.href;
    const url = currentUrl.split('/');
    const currentSelected = url[url.length - 1];

    const navbar = ['penggunaan', 'tagihan', 'pembayaran']

    return (
        <div className='sidebar'>
            <div className='sidebar__main'>
                <Link to='/dashboard' className='sidebar__main--dashboard'>
                    <p className='sidebar__main--title'>Dashboard</p>
                </Link>
                <div className='sidebar__main--container'>
                    {navbar.map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item}`}
                            className={`sidebar__main--container__item ${item === currentSelected ? 'selected' : ''}`}>
                                <div className='sidebar__main--container__item--container'>
                                    <img src='Email.svg' alt='Home' className={`sidebar__main--container__item--icon ${item !== currentSelected ? 'notselected' : ''}`} />
                                    <span className='sidebar__main--container__item--text'>{item}</span>
                                </div>
                        </Link>
                    ))}
                    
                </div>
            </div>
                    
        </div>
  )
}

export default SideBar