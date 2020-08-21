import React from 'react';
import logo from "../images/DAILWhiteLetters.svg";

const Footer = () => {
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container about">
                                <h4 className = "text-center">Few Words From Dental Arts Implant Lab</h4>
                                <p className="white text-center">If there is anything that we can do for you, please, contact us through any platform and we will be more than happy to assist. Additionally, 
                                if there are any recommendations that you would like to provide or any wierd bugs that exists on this website, let us know so that we can address the issue. Thank you for considering Dental Arts! </p>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container text-center">
                            <img className = 'text-center' style = {{width:"175px", height: "175px"}} src ={logo} alt="Dental Arts"/>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p-small text-center">Copyright © 2020 <a href="https://www.linkedin.com/in/joseacabral/" style={{textDecoration: "underline"}}>Made by Jose Cabral</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;