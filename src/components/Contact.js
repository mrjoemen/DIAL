import React, { useState } from 'react';
import sweetalert from 'sweetalert';

const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = event => {
        event.preventDefault()

        if (event.target.placeholder === "Subject") {
            setSubject(event.target.value);
        }
        else if (event.target.placeholder === "Email") {
            setEmail(event.target.value);
        }
        else {
            setMessage(event.target.value);
        };
    }

    const handleSubmit = event => {
        event.preventDefault()

        const data = {
            email,
            subject,
            message
        }

        // axios.post('/sendMail', data)
        // .then(() => console.log)
        fetch("http://localhost:3001/sendMail", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (res.status === 200) {
                sweetalert({
                    title: "Message sent!",
                    text: "We'll get in touch with you as soon as possible!",
                    icon: "success",
                    button: "Thank you!"
                });
                setSubject('');
                setEmail('');
                setMessage('');
            }
        })
        .catch(err => {
            if (err) {
                sweetalert({
                    title: "Uh oh! There was an error...",
                    text: "Oops! Somthing went wrong, try again later!",
                    icon: "error",
                });
            }
        })
    }
    return(
        <div id="contact" className="form-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <div className="section-title">CONTACT</div>
                            <h2>Get In Touch Using Our Form</h2>
                            <p>Have any questions that we can answer for you personally? Submit this form and we will get into contact as soon as possible!</p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="address"><i className="fas fa-map-marker-alt" />Atlanta, Georgia</li>
                                <li><i className="fas fa-phone" /><a href="tel:6789102917">(678)910-2917</a></li>
                                <li><i className="fas fa-phone" /><a href="tel:6789959821">(678)995-9821</a></li>
                                <li><i className="fas fa-envelope" /><a href="mailto:dentalartsimplant@gmail.com">DentalArtsImplant@gmail.com</a></li>
                            </ul>
                            <h3>Follow us on Facebook!
                            <span className="m-3 fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon" />
                                    <i className="fab fa-facebook-f fa-stack-1x" />
                                </a>
                            </span>
                            </h3>
                        </div> {/* end of text-container */}
                    </div> {/* end of col */}
            <div className="col-lg-6">
                {/* Contact Form */}
                <form id="contactForm" data-toggle="validator" data-focus="false" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control-input" value = {email} placeholder = "Email" onChange={handleChange} required/>
                    <div className="form-text with-errors" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control-input" required value = {subject} placeholder = "Subject" onChange ={handleChange}/>
                    <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                    <textarea className="form-control-textarea" id="cmessage" required value={message} placeholder = "Message" onChange={handleChange} />
                    <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                    <button type="submit" className="form-control-submit-button" >SUBMIT MESSAGE</button>
                </div>
                <div className="form-message">
                    <div id="cmsgSubmit" className="h3 text-center hidden" />
                </div>
                </form>
                {/* end of contact form */}
            </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div>
    );
};

export default Contact;