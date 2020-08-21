import React from 'react';

const Carousel = () => {
    return(
        <div id = "header">
            <div id="carouselIndicators" className = "carousel slide" data-ride = 'carousel' data-interval="5000">
                <ol className="carousel-indicators">
                    <li data-target = "#carouselIndicators" data-slide-to= "0" className="active"></li>
                    <li data-target = "#carouselIndicators" data-slide-to= "1"></li>
                    <li data-target = "#carouselIndicators" data-slide-to= "2"></li>
                </ol>
                <div className="carousel-inner" role = "listbox">
                    <div className="carousel-item active min-vh-100" id= "slide1">
                        <div className="carousel-caption text-center">
                            <h1 className="text-uppercase">Dental Arts</h1>
                            <h2 className="text-uppercase">Implant Laboratory</h2>
                            <p className = "testimonial-text">"Never settle."</p>
                            <a className="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
                        </div>
                    </div>
                    <div className="carousel-item" id= "slide2">
                        <div className="carousel-caption text-center"> 
                            <h1 className="text-uppercase">Services</h1>
                            <p>We have some of the lowest prices along with the best quality. <br />Checkout some services we have to offer.</p>
                            <a className="btn-solid-lg page-scroll text-uppercase" href="#services">Find out more</a>
                        </div>
                    </div>
                    <div className="carousel-item" id= "slide3">
                        <div className="carousel-caption text-center">
                            <h1 className ="text-uppercase">Meet Us!</h1>
                            <p>Wander around our website and get to know Dental Arts Implant Laboratory!</p>
                            <a className="btn-solid-lg page-scroll text-uppercase " href = "#contact">Contact us!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;