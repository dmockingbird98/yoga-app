import React from 'react';

export default function Location({location}){
    return(
        <div className="locations d-flex">
            <p> <i className="fas fa-map-marker-alt"></i> {location}</p>
        </div>
    )
}