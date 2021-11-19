import React from 'react';

import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className='navbar navbar-expand-lg container navbar-light bg-light"'>
                    <div className='container-fluid'>
                        <a className={`navbar-brand' ${classes['title']}`} href='/'>
                            Crochet-App
                        </a>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item dropdown'>
                                    <div
                                        className={`nav-link dropdown-toggle ${classes['title']}`}
                                        id='navbarDropdown'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        1/8
                                    </div>
                                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        <li>
                                            <a className='dropdown-item' href='/tall-one-eight'>
                                                Todos los productos
                                            </a>
                                        </li>
                                        <hr className='dropdown-divider' />

                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className='dropdown-divider' />
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item dropdown'>
                                    <div
                                        className={`nav-link dropdown-toggle ${classes['title']}`}
                                        id='navbarDropdown'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        1/6
                                    </div>
                                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        <li>
                                            <a className='dropdown-item' href='/tall-one-six'>
                                                Todos los productos
                                            </a>
                                        </li>
                                        <hr className='dropdown-divider' />

                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className='dropdown-divider' />
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item dropdown'>
                                    <div
                                        className={`nav-link dropdown-toggle ${classes['title']}`}
                                        id='navbarDropdown'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        1/4
                                    </div>
                                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        <li>
                                            <a className='dropdown-item' href='/tall-one-four'>
                                                Todos los productos
                                            </a>
                                        </li>
                                        <hr className='dropdown-divider' />

                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className='dropdown-divider' />
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item dropdown'>
                                    <div
                                        className={`nav-link dropdown-toggle ${classes['title']}`}
                                        id='navbarDropdown'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='true'
                                    >
                                        1/3
                                    </div>
                                    <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        <li>
                                            <a className='dropdown-item' href='/tall-one-three'>
                                                Todos los productos
                                            </a>
                                        </li>
                                        <hr className='dropdown-divider' />

                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className='dropdown-divider' />
                                        </li>
                                        <li>
                                            <a className='dropdown-item' href='#'>
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className='d-flex'>
                                <input
                                    className='form-control me-2'
                                    type='search'
                                    placeholder='Search'
                                    aria-label='Search'
                                />
                                <button className='btn btn-outline-success' type='submit'>
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
