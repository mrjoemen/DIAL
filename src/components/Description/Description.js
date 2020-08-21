import React from 'react';
import Card from './Card.js'

const Description = () => {
    
    return (
        <div className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Card 
                            fontAwesome = {"fa-tooth"}
                            title = {"Variety of Services"}
                            description = {"Whether if it's partials, night guards, splints, milling, dentures, or implants, we offer it!"}

                        />
                        <Card 
                            fontAwesome = {"fa-star"}
                            title = {"Top of the Line Quality"}
                            description = {"We take pride in our quality in each and every piece. We do not take any \"shortcuts\" and treat every case with delicacy!"}
                        />
                        <Card 
                            fontAwesome = {"fa-smile"}
                            title = {"Friendly Crew"}
                            description = {"We want your experience with us to be the best there is to offer! We care about each and every one of our customers and value our relationship with them."}
                        />
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div>
    )
}

export default Description;