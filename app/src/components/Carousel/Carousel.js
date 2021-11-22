import React from 'react';

import Animales from '../../assets/images/animales.jpeg';
import Ropa from '../../assets/images/ropa.jpeg';
import Osito from '../../assets/images/osito.jpeg';

import classes from './carousel.module.css';

const Carousel = () => {
    return (
        <>
            <div
                id='carouselExampleControls'
                className={`carousel slide mt-4 ${classes['carousel']}`}
                data-bs-ride='carousel'
            >
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src={Animales} className={`${classes['img-size']}`} alt='animales' />
                    </div>
                    <div className='carousel-item'>
                        <img src={Ropa} className={`${classes['img-size']}`} alt='ropa' />
                    </div>
                    <div className='carousel-item'>
                        <img src={Osito} className={`${classes['img-size']}`} alt='osito' />
                    </div>
                </div>
                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='prev'
                >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleControls'
                    data-bs-slide='next'
                >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </>
    );
};

export default Carousel;
