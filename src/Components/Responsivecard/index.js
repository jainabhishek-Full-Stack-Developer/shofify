import React from 'react';
import './index.css';
import { TiTick } from 'react-icons/ti';



const Responsivecard = ({ price, featureheading, featureone, featurethree }) => {

    return (
        <>
            <div className='mobile-card'>
                <div className='card-body'>
                    <div className='card-price'>
                        <h1>₹{price}</h1>
                        <p>INR <br />/mo</p>
                    </div>
                    <div className='scheme-conatiner'>
                        <p>Get your first 3 months for ₹20/mo</p>
                    </div>
                    <div className='feature-section'>
                        <p>{`What's included on ${featureheading}`}</p>
                        <ul>
                            <li>
                                <TiTick size={20} className='tick' />
                                <p>{featureone}</p>
                            </li>
                            <li>
                                <TiTick size={20} className='tick' />
                                <p>Up to 1,000 inventory locations</p>
                            </li>
                            <li><TiTick size={20} className='tick' />
                                <p>{`${featurethree} staff accounts`}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='card-footer'>
                    <button type="button" >Try for free</button>
                </div>
            </div>
        </>
    )
}

export default Responsivecard
