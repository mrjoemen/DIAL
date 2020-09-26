import React from 'react';
import logo from "../../images/DAILWhiteLetters.svg";
import useNav from './useNav.js';
import AnchorLink from 'react-anchor-link-smooth-scroll'; //This is for smooth scrolling

const Navbar = () => {

    const scroll = useNav();

    return (
    // <!-- Navbar -->
    <nav id = 'mebar' className={`navbar navbar-expand-md navbar-dark navbar-custom fixed-top ${scroll ? "top-nav-collapse" : null}`}>
        {/* <!-- Text Logo - Use this if you don't have a graphic logo -->
        <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Aria</a> --> */}

        {/* <!-- Image Logo --> */}
        <a className="navbar-brand logo-image" href="index.html">
            <img src={logo} alt="Dental Arts Implant Lab"/>Dental Arts Implant Lab
        </a>
        
        {/* <!-- Mobile Menu Toggle Button --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <AnchorLink className="nav-link page-scroll" href="#header">HOME<span className="sr-only">(current)</span></AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink className="nav-link page-scroll" href="#intro">INTRO</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink className="nav-link page-scroll" href="#services">SERVICES</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink className="nav-link page-scroll" href="#Meet">MEET US</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink className="nav-link page-scroll" href="#contact" id='contactNav'>CONTACT</AnchorLink>
                </li>
            </ul>
            {/* <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <span className="hexagon"></span>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
            </span> */}
        </div>
    </nav>

    )
}

export default Navbar;