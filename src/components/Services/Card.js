import React from 'react';

const Card = ({ image, title, description, price }) => {
    return(
        <div className="card">
            <div className="card-image">
                <img className="img-fluid" src={image} alt="alternative"/>
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p>{description}</p>
                <p className="price">Starting at <span>{price}</span></p>
            </div>
            <div className="button-container">
                <a className="btn-solid-reg page-scroll" href="#callMe">PRICES</a>
            </div> 
        </div>
    )
};

export default Card;