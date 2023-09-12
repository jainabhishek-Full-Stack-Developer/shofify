import React from 'react';
import { TiTick } from 'react-icons/ti';
import './index.css';


const Card = ({ active, heading, subheading, subtitle, price, featureheading, featureone, featurethree, border }) => {
    return (
        <>
            <div className='card' id={border === 'true' ? 'active' : null} >
                {
                    active === 'true' && (
                        <>
                            <div className='active-tag'>
                                <p>MOST POPULAR</p>
                            </div>
                        </>
                    )
                }
                <div className='card-title'>
                    <h2>{heading}</h2>
                    <p className='sub-heading' >{subheading}</p>
                    <p className='sub-heading-title' >{subtitle}</p>
                </div>
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

export default Card
