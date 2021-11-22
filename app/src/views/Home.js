import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import News from '../components/News/News';

const Home = () => {
    return (
        <>
            <Carousel />
            <h2 className='pt-4'>Novedades</h2>
            <News />
        </>
    );
};

export default Home;
