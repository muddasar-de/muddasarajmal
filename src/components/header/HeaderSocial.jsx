import React from 'react';
import { BsLinkedin, BsBehance, BsGithub } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/muddasar-de/' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://www.behance.net/muddasar-de' target='_blank'>
        <BsBehance />
      </a>
      <a href='https://github.com/muddasar-de' target='_blank'>
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
