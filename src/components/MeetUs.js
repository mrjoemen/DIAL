import React from 'react';
import myphoto from '../images/myphoto2Re.jpg';
import pops from '../images/pops2Re.jpg';

const MeetUs = () => {
    return(
        <div id='Meet' className="basic-1">
                <div className="container">
                <div className="row">
                        <div className="col-lg-5">
                            <div className="image-container">
                                <img src={pops} alt="Nelson Marte" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-7 justify-content-end">
                            <div className="text-container">
                                <div className="section-title text-uppercase">Meet Dental Arts Implant Laboraory</div>
                                <h2>Nelson Marte</h2>
                                <p className="testimonial-text2">Master Dental Technician <br/> 30+ years of Experience</p>
                                <p id="par">Nelson Marte, born in the Dominican Republic, gain interest in dentistry at a young age as his uncle introduced dentistry to him and to his siblings. It struck a chord within Nelson because he saw how became revitalized when they were able
                                 to live a life with confidence with teeth. Thus, at a young age he devoted hours of his time doing mock cases to perfect his craft. When he came to the United States, he was determined to find a position where he can work as a Dental Lab Technician, and
                                 he finally found it Long Island, New York in 1988. From there, He worked at many locations, most of them involving some form of management. His most recent experience include working at ClearChoice Dental Impants working as a manager for 10+ years. </p>
                            </div>
                        </div>
                    </div>
                    <div className="m-5 p-1"></div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="text-container">
                                <h2>Jose Cabral</h2>
                                <p className="testimonial-text2">BBA in Computer information Systems <br/> Apprentice Lab Technician</p>
                                <p id="par">Born in the Dominican Republic and raised in Georgia, Jose Cabral, Nelson Marte's son, was raised in a dental enviroment his whole life. He spent many hours at a lab, slowly absorbing and learning the craft of dentistry. 
                                Finally, when he turned 17 years old, he landed his first job at ClearChoice Dental Implant, where he became an apprentice lab technician. After years of working the industry, he decided to attend Georgia State University where he obtaining his BBA Computer
                                Information Systems in 2021. From there, he will use the information learned through college to integrate technology and business in a unique way to advance the industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image-container">
                                <img src={myphoto} alt="Jose Cabral" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MeetUs;