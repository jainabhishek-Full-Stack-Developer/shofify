import React, { useState } from 'react';
import './index.css';
import Card from '../Card';
import Responsivecard from '../Responsivecard';

const Pricesection = () => {
    const [selectedOption, setSelectedOption] = useState('Basic');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <>
            <div className='laptop-card-details'>
                <div className='price-container'>
                    <div className='price-button'>
                        <div className='price-tag'>
                            <button type="submit" className='pay-monthly' >Pay Monthly</button>
                            <button type="submit" className='pay-yearly' >Pay Yearly (Save 25%)</button>
                        </div>
                    </div>
                </div>
                <div className='card-container'>
                    <Card active='true' heading='Basic' subheading='FOR INDIVIDUALS & SMALL BUSINESSES' subtitle='Everything you need to create your store, ship products, and process payments' price='1,994' featureheading='Basic' featureone='Basic reports' featurethree='2' border='true' />
                    <Card active='false' heading='Shopify ' subheading='FOR SMALL BUSINESSES' subtitle='Level up your business with professional reporting and more staff accounts' price='7,447' featureheading='Shopify' featureone='Professional reports' featurethree='5' border='false'/>
                    <Card active='false' heading='Advanced ' subheading='FOR MEDIUM TO LARGE BUSINESSES' subtitle='Get the best of Shopify with custom reporting and our lowest transaction fees' price='30,164' featureheading='Advanced' featureone='Custom report builder' featurethree='15' border='false'/>
                </div>
            </div>
            <div className='mobile-card-details'>
                <div>
                    <ul className='mobile-button'>
                        <li
                            className={selectedOption === 'Basic' ? 'active' : ''}
                            onClick={() => handleOptionClick('Basic')}
                        >
                            Basic
                        </li>
                        <li
                            className={selectedOption === 'Shopify' ? 'active' : ''}
                            onClick={() => handleOptionClick('Shopify')}
                        >
                            Shopify
                        </li>
                        <li
                            className={selectedOption === 'Advanced' ? 'active' : ''}
                            onClick={() => handleOptionClick('Advanced')}
                        >
                            Advanced
                        </li>
                    </ul>
                </div>
                {selectedOption === 'Basic' && (
                    <Responsivecard
                        price='1,994'
                        featureheading='Basic'
                        featureone='Basic reports'
                        featurethree='2'
                    />
                )}
                {selectedOption === 'Shopify' && (
                    <Responsivecard
                        price='7,447'
                        featureheading='Shopify'
                        featureone='Professional reports'
                        featurethree='5'
                    />
                )}
                {selectedOption === 'Advanced' && (
                    <Responsivecard
                        price='30,164'
                        featureheading='Shopify'
                        featureone='Custom report builder'
                        featurethree='15'
                    />
                )}
            </div>

        </>
    )
}

export default Pricesection
