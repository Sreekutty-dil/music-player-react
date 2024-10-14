import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(props) {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
            <div className="container">
                <NavLink className="navbar-brand" to={'/'}>Music-Play</NavLink>

                <button className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='menu'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={'/'} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/about'} className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu