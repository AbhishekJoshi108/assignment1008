import React from 'react'
import './Search.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Searchpage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center mt-5'>What can we help you with?</h2>

                            <div className="col-md-6 mx-auto mt-4 form">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='fas' />
                                <input type="text" placeholder='search our articles' className='form-control inputs' />
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Searchpage
