import React from 'react'
import img1 from "../images/image1.jpg"
import img2 from "../images/img2.jpeg"
import img3 from "../images/img3.jpeg"
import img4 from "../images/img4.jpeg"
import img5 from "../images/img5.jpeg"
const About = () => {
    return (

        <>
            <section id='about'>
                <h2 className='text-danger text-center mt-5' style={{ textDecoration: "underline" }}>About</h2>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente explicabo tenetur consequuntur porro quam rerum, facere quas debitis dolore odio molestias repudiandae ratione cumque iste excepturi nostrum alias libero laborum veniam eum sit error quae atque. Nulla voluptatum illum reprehenderit aliquam ex, iusto cupiditate, quisquam quam, dignissimos quos odit voluptatibus commodi molestias pariatur fugiat. Repellat harum voluptatem nostrum ratione.</p>
                        </div>
                        <div className="col-md-6">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img1} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img2} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img3} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img4} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img5} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>


    )
}

export default About
