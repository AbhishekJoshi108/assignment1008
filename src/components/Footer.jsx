import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img from "../images/apps.jpg"
import "./Footer.css"
import { faDribbble, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-3 hello">
              <h3><FontAwesomeIcon icon={faHotel} className='me-2 text-danger' />PalmParadise</h3> <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, hic? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, eos?</p>
              <img src={img} className='img-fluid' alt="" />
              <div className="icons mt-5 text-primary">
                <FontAwesomeIcon icon={faTwitter} className='me-2 fs-5' />
                <FontAwesomeIcon icon={faFacebook} className='me-2 fs-5' />
                <FontAwesomeIcon icon={faInstagram} className='me-2 fs-5' />
                <FontAwesomeIcon icon={faYoutube} className='me-2 fs-5' />
                <FontAwesomeIcon icon={faDribbble} className='me-2 fs-5' />
              </div>
            </div>
            <div className="col-md-2 p-3">
              <p className='text-center fs-5' style={{ fontWeight: 'bold' }}>AboutUs</p>
              <p className='text-center'><a href="#about" style={{ textDecoration: 'none', color: 'black' }}>About</a></p>
              <p className='text-center'><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>contactus</a></p>
              <p className='text-center'><a href="#categories" style={{ textDecoration: 'none', color: 'black' }}>Categories</a></p>
              <p className='text-center'><a href="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</a></p>
              <p className='text-center' style={{ fontWeight: 'bold' }}>Support</p>
              <p className='text-center'>Helpcenter</p>

            </div>

            <div className="col-md-3 p-3">
              <p className='text-center fs-5' style={{ fontWeight: 'bold' }}>Solutions</p>
              <p className='text-center'><a href="#about" style={{ textDecoration: 'none', color: 'black' }}>Customer success</a></p>
              <p className='text-center'><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Sales</a></p>
              <p className='text-center'><a href="#categories" style={{ textDecoration: 'none', color: 'black' }}>Recruting</a></p>
              <p className='text-center'><a href="/home" style={{ textDecoration: 'none', color: 'black' }}>Marketing</a></p>
              <p className='text-center' style={{ fontWeight: 'bold' }}>Add-Ons</p>
              <p className='text-center'>Download for chrome</p>

            </div>


            <div className="col-md-3 p-3">
              <p className='text-center fs-5' style={{ fontWeight: 'bold' }}>Popular features</p>
              <p className='text-center'><a href="#about" style={{ textDecoration: 'none', color: 'black' }}>Availablitiy</a></p>
              <p className='text-center'><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>sending Notification</a></p>
              <p className='text-center'><a href="#categories" style={{ textDecoration: 'none', color: 'black' }}>Safety</a></p>
              <p className='text-center'><a href="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</a></p>
              <p className='text-center' style={{ fontWeight: 'bold' }}>Customer Services</p>
              <p className='text-center'>Helpcenter</p>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
