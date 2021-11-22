import React from 'react';
import Card from '../components/Card/Card';

import Bufanda from '../assets/images/bufanda-crochet.jpeg';

// Está hardcodeado para probarlo como ejemplo, cuando tengamos datos de DB lo renderizaremos con un map

const TallOneEight = () => {
    return (
        <>
            <div className='container pt-4'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    <Card
                        source={Bufanda}
                        name={'Bufanda'}
                        description={'Preciosa bufanda hecha a mano'}
                        price={'20€'}
                        alt={'bufanda'}
                    />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
};

export default TallOneEight;
