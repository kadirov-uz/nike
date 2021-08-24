import React from 'react';
import  './MenHeader.css';

function MenHeader() {
    return (
        <div className="men__header">

            <h1 className="menHeader__logo">Men</h1>
            <ul className="menHeader__collection">
                <li className="menHeader__item">Sale</li>
                <li className="menHeader__item">Shoes</li>
                <li className="menHeader__item">Clothing</li>
                <li className="menHeader__item">Just Released</li>
                <li className="menHeader__item">Best Sellers</li>
            </ul>  
    
        </div>
    )
}

export default MenHeader
