import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assests/me.png';
import HeaderSocial from './HeaderSocial';
import { BsArrowRight, BsFillPenFill } from 'react-icons/bs';
import { bounceIn } from 'react-animations';

import { init } from 'ityped';
const Header = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ['Graphic Designer', 'React Developer', 'WordPress Designer'],
    });
  }, []);
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1 className='my__name'>Muddasar Ajmal</h1>
        <h5 className='text-light'>
          <span ref={textRef}></span>
          <BsFillPenFill />
        </h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={Me} alt='Sorry' />
        </div>
        <div className='scroll_container'>
          <a href='#contact' className='scroll__down'>
            Scroll Down
            {/* <BsArrowRight /> */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
