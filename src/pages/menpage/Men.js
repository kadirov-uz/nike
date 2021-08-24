import React from 'react';
import './Men.css';
import MenHeader from '../../men/menHeader/MenHeader';
import TrailCollection from '../../men/trailCollection/TrailCollection';



function Men() {
    
    return (
        <div className="men">
            <div className="men__mainContainer">
                <MenHeader/>
                <TrailCollection/>
            </div>
        </div>
    )
}

export default Men
