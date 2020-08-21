import React from 'react';
import office from '../images/HelenaLopes.jpg'

const Intro = () => {

    return(
        <div id="intro" className="basic-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="text-container">
                            <div className="section-title">INTRO</div>
                            <h2>We offer dental laboratory services for dentist of any size at an affordable price!</h2>
                            <p>Your friendly mom and pop business that will deliver the utmost quality dental pieces along with outstanding customer service.</p>
                            <p className="testimonial-text">"Our mission here at Dental Arts is to ensure that we are able to provide service that dentist finally deserves at an affordable price."</p>
                        <div className="testimonial-author">- Nelson Marte, Founder of Dental Arts Implant Lab</div>
                    </div> 
                </div> 
                <div className="col-lg-7">
                    <div className="image-container">
                        <img className="img-fluid" src={office} alt="alternative"/>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
    )
}

export default Intro;