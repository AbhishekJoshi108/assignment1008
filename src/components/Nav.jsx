import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand fs-3 text-primary" href="#"><FontAwesomeIcon icon={faHotel} className='me-2 text-danger' />PALMPARADISE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active  me-4 fs-5" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-4 fs-5" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-4 fs-5" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  me-4 fs-5" href="#categories">Categories</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav
