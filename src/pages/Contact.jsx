import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <>

            <section id='contact'>
                <h2 className='mt-5 text-center' style={{ color: 'blueviolet', textDecoration: "underline" }}>Contact Us!!!</h2>
                <div className="container-fluid">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-7 col-6 col-12 map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6391450.758972185!2d-89.74226384875563!3d38.537788952026375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884a54a5d4cb0945%3A0xbb00c768decd3a43!2sWest%20Virginia%2C%20USA!5e0!3m2!1sen!2sin!4v1712230916500!5m2!1sen!2sin"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='img-fluid'></iframe>
                            </div>
                            <div className="col-md-5 col-6 col-12">
                                <form className='form'>
                                    {/* <!-- Name input --> */}
                                    <div data-mdb-input-init class="form-outline mb-4">
                                    <label class="form-label" for="form4Example1">Name</label>
                                        <input type="text" id="form4Example1" class="form-control" />
                                    </div>

                                    {/* <!-- Email input --> */}
                                    <div data-mdb-input-init class="form-outline mb-4">
                                    <label class="form-label" for="form4Example2">Email address</label>

                                        <input type="email" id="form4Example2" class="form-control" />
                                    </div>

                                    {/* <!-- Message input --> */}
                                    <div data-mdb-input-init class="form-outline mb-4">
                                    <label class="form-label" for="form4Example3">Message</label>

                                        <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                                    </div>

                                    {/* <!-- Checkbox --> */}
                                    <div class="form-check d-flex justify-content-center mb-4">
                                        <input
                                            class="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form4Example4"
                                            checked
                                        />
                                        <label class="form-check-label" for="form4Example4">
                                            Send me a copy of this message
                                        </label>
                                    </div>

                                    {/* <!-- Submit button --> */}
                                    <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Contact
