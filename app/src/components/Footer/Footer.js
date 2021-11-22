import React from 'react';

import classes from './footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={`${classes['container-footer']}`}>
                <div className='container'>
                    <footer className='py-3 my-4'>
                        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                            <li className='nav-item'>
                                <a href='#' className='nav-link px-2 text-muted'>
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link px-2 text-muted'>
                                    Features
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link px-2 text-muted'>
                                    Pricing
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link px-2 text-muted'>
                                    FAQs
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link px-2 text-muted'>
                                    About
                                </a>
                            </li>
                        </ul>
                        <p className='text-center text-muted border-bottom pb-3'>&copy; 2021 Company, Inc</p>
                        <div className='d-flex flex-column'>
                            Síguenos en Redes !!!
                            <a className={`${classes['icon']}`} href='https://www.instagram.com/bianca_cosaj/'>
                                <i className='bi bi-instagram'></i>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer;
