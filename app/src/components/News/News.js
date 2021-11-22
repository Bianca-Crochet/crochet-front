import React from 'react';
import Card from '../Card';

import Bufanda from '../../assets/images/bufanda-crochet.jpeg';

const News = () => {
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
                    <Card
                        source={Bufanda}
                        name={'Bufanda'}
                        description={'Preciosa bufanda hecha a mano'}
                        price={'20€'}
                        alt={'bufanda'}
                    />
                    <Card
                        source={Bufanda}
                        name={'Bufanda'}
                        description={'Preciosa bufanda hecha a mano'}
                        price={'20€'}
                        alt={'bufanda'}
                    />
                    <Card
                        source={Bufanda}
                        name={'Bufanda'}
                        description={'Preciosa bufanda hecha a mano'}
                        price={'20€'}
                        alt={'bufanda'}
                    />
                </div>
            </div>
        </>
    );
};

export default News;
