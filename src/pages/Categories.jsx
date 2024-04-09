import React from 'react'
import img1 from "../images/image1.jpg"
import img2 from "../images/img2.jpeg"
import img3 from "../images/img3.jpeg"
import img4 from "../images/img4.jpeg"
import img5 from "../images/img5.jpeg"
const Categories = () => {
    return (
        <>
        <h2 className='text-success text-center mt-5' style={{textDecoration:'underline'}}>Categories</h2>

        <section id='categories'>
        <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow mt-3">
                                <div className="card-image">
                                    <img src={img1} className='img-fluid' alt="" />
                                </div>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid accusantium beatae debitis sapiente dolorem modi labore eos itaque.</p>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mt-3">
                                <div className="card-image">
                                    <img src={img2} className='img-fluid' alt="" />
                                </div>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid accusantium beatae debitis sapiente dolorem modi labore eos itaque.</p>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mt-3">
                                <div className="card-image">
                                    <img src={img3} className='img-fluid' alt="" />
                                </div>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid accusantium beatae debitis sapiente dolorem modi labore eos itaque.</p>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mt-3">
                                <div className="card-image">
                                    <img src={img4} className='img-fluid' alt="" />
                                </div>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid accusantium beatae debitis sapiente dolorem modi labore eos itaque.</p>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mt-3">
                                <div className="card-image">
                                    <img src={img5} className='img-fluid' alt="" />
                                </div>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid accusantium beatae debitis sapiente dolorem modi labore eos itaque.</p>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mt-3">
                                <div className="card-image">
                                    <img src={img5} className='img-fluid' alt="" />
                                </div>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi aliquid accusantium beatae debitis sapiente dolorem modi labore eos itaque.</p>
                            </div>

                        </div>


                    </div>


                </div>
            </div>

        </section>
            

        </>
    )
}

export default Categories
