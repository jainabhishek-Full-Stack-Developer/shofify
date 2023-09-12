import React from 'react';
import Header from '../Header';
import Pricesection from '../Pricesection';
import './index.css';

const Home = () => {
    return (
        <>
            <div className='container'>
                <Header />
                <Pricesection />
            </div>
        </>
    )
}

export default Home
