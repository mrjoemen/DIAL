import React from 'react';

const Card = ({ fontAwesome, title, description }) => {
    return(
        <div className="card">
            <span className="fa-stack">
                <span className="hexagon" />
                <i className= {`fas ${fontAwesome} fa-stack-1x`} />
            </span>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;