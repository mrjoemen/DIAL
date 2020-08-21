import React from 'react';
import Card from './Card.js'
import image1 from '../../images/slide3.jpg'
import image2 from '../../images/implant.jpg'
import image3 from '../../images/removable.jpg'

const Services = () => {
    return(
        <div id="services" className="cards-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">SERVICES</div>
                    <h2>Choose The Service Package<br/> That Suits Your Needs</h2>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <Card 
                        image = {image1}
                        title = "Dentures and Partials"
                        description = "We offer a variety of services for dentures and partials. No matter how difficult the case may be, we'll take care of it!"
                        price = "$50"
                    />
                    <Card 
                        image = {image2}
                        title = "Implants"
                        description = "All-on-Fours are our bread and butter! With over 10 years of experience, we have seen and can do it all!"
                        price = "$75"
                    />
                    <Card 
                        image = {image3}
                        title = "Removables"
                        description = "A patient needs a night guard to stop grinding their precious teeth? We offer those as well!"
                        price = "$25"
                    />

                </div> 
            </div> 
        </div> 
    </div>
    )
}

export default Services;