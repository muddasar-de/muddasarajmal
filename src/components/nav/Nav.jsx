import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { ImFilesEmpty } from 'react-icons/im';
import { MdOutlineReviews } from 'react-icons/md';
const Nav = () => {
  const [acvtiveNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href='#'
        data-toggle='tooltip'
        data-placement='bottom'
        title='Home'
        onClick={() => setActiveNav('#')}
        className={acvtiveNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        data-toggle='tooltip'
        data-placement='bottom'
        title='About'
        onClick={() => setActiveNav('#about')}
        className={acvtiveNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        data-toggle='tooltip'
        data-placement='bottom'
        title='Experience'
        onClick={() => setActiveNav('#experience')}
        className={acvtiveNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      {/* <a
        href='#services'
        data-toggle='tooltip'
        data-placement='bottom'
        title='Services'
        onClick={() => setActiveNav('#services')}
        className={acvtiveNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a> */}
      <a
        href='#projects'
        data-toggle='tooltip'
        data-placement='bottom'
        title='Portfolio'
        onClick={() => setActiveNav('#projects')}
        className={acvtiveNav === '#projects' ? 'active' : ''}>
        <ImFilesEmpty />
      </a>
      <a
        href='#testimonial'
        data-toggle='tooltip'
        data-placement='bottom'
        title='Testimonials'
        onClick={() => setActiveNav('#testimonial')}
        className={acvtiveNav === '#testimonial' ? 'active' : ''}>
        <MdOutlineReviews />
      </a>
      <a
        href='#contact'
        data-toggle='tooltip'
        data-placement='bottom'
        title='Contact'
        onClick={() => setActiveNav('#contact')}
        className={acvtiveNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
