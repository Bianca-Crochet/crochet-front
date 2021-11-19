import React from 'react';

const Card = () => {
    return (
        <>
            <div className='col'>
                <div className='card h-100'>
                    <img src='...' className='card-img-top' alt='...' />
                    <div className='card-body'>
                        <h5 className='card-title'>Nombre del Artículo</h5>
                        <p className='card-text'>Descripción del Artículo</p>
                        <p className='card-text'>Precio del Artículo</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
