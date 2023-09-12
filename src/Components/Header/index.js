import React from 'react';
import './index.css';
import { BsChevronDown } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  return (
    <>
      <header>
        <nav className='laptop-menubar'>
          <ul className='header-container'>
            <li>
              <div className='left-container'>
                <img src='./logo.png' alt='logo' />
                <ul>
                  <li>Solutions<span><BsChevronDown size={12} /></span></li>
                  <li>Pricing</li>
                  <li>Resources<span><BsChevronDown size={12} /></span></li>
                </ul>
              </div>
            </li>
            <li className='right-conatiner'>
              <p>Log In</p>
              <button type='btn' >Start free trial</button>
            </li>
          </ul>
        </nav>
        <nav className='mobile-menubar'>
          <ul className='mobile-header-container'>
            <li>
              <img src='./logo.png' alt='logo' />
            </li>
            <li className='mobile-right-conatiner'>
              <p>Start free trial</p>
              <button type='button'><FaBars size={20} /></button>
            </li>
          </ul>
        </nav>
      </header>
      <hr className='hr-line' />
    </>
  )
}

export default Header
