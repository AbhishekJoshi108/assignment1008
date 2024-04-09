import { faBurger, faCreditCard, faDumbbell, faLock, faSquareParking, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Facilities.css"
import React from 'react'

const Facilities = (props) => {
  return (
    <>
    <div className="container-fluid">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 text-center">
                    <div className="card border-0">
                       <h4 className='ms-md-auto fs-5 text-primary'><FontAwesomeIcon icon={faWifi} className='me-4'/>{props.facilities}</h4>
                    </div>

                </div>
                <div className="col-md-6 text-center">
                    <div className="card border-0">
                        <h4 className=' me-md-auto fs-5 text-success'> <FontAwesomeIcon icon={faSquareParking} className='me-4' />Free Parking</h4>
                    </div>

                </div>
                <div className="col-md-6 text-center">
                    <div className="card border-0">
                        <h4  className='ms-md-auto fs-5 text-danger'> <FontAwesomeIcon icon={faDumbbell} className='me-4 text-danger'  />{props.fitness}</h4>
                    </div>

                </div>
                <div className="col-md-6 text-center">
                    <div className="card border-0">
                        <h4 className='me-md-auto fs-5' style={{color:'chocolate'}}><FontAwesomeIcon icon={faLock}className='me-4 text-success' />Locker's Available</h4>
                    </div>

                </div>
                <div className="col-md-6 text-center">
                    <div className="card border-0">
                        <h4 className='ms-md-auto fs-5'><FontAwesomeIcon icon={faBurger} className='me-4 text-warning' />Food Facilities</h4>
                    </div>

                </div>
                <div className="col-md-6 text-center">
                    <div className="card border-0">
                        <h4 className='me-md-auto fs-5'style={{color:'darkmagenta'}}><FontAwesomeIcon icon={faCreditCard} className='me-4 text-primary'/>Key&Cards</h4>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Facilities
