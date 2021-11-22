import React from 'react';
import PropTypes from 'prop-types';

import classes from './card.module.css';

const Card = ({ source, name, description, price, alt }) => {
    return (
        <>
            <div className='col'>
                <div className='card h-100 border-0'>
                    <img src={source} className='card-img-top ' alt={alt} />
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <p className='card-text'>{description}</p>
                        <p className='card-text'>{price}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    source: PropTypes.any,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    alt: PropTypes.string,
};

export default Card;
