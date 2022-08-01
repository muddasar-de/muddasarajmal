import React from 'react';
import './footer.css';
import { BsLinkedin, BsBehance, BsGithub } from 'react-icons/bs';
// import Spline from 'react-spline';

const Footer = () => {
  return (
    <div className='footer_container container'>
      <h3>Quick Links</h3>
      <div className='quick__links'>
        <a href='#'>Home</a>
        <a href='#about'>About</a>
        <a href='#services'>Services</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
      <div className='footer__social'>
        <a href='https://www.linkedin.com/in/muddasar-de/' target='_blank'>
          <BsLinkedin className='link_icon' />
        </a>
        <a href='https://www.behance.net/muddasar-de' target='_blank'>
          <BsBehance className='link_icon' />
        </a>
        <a href='https://github.com/muddasar-de' target='_blank'>
          <BsGithub className='link_icon' />
        </a>
      </div>
      {/* <meter value='0.7'></meter> */}
      {/* <Spline scene='https://prod.spline.design/fkqxgQ6uvjNc7jyG/scene.splinecode' /> */}

      <h5 className='footer_text'>
        {`If you want source code, visit my `}
        <span>
          <a href='https://github.com/muddasar-de/muddasarajmal'>github.</a>
        </span>
      </h5>
    </div>
  );
};

export default Footer;
{
  /* <div className='card'>
        <img src='https://mir-s3-cdn-cf.behance.net/projects/404/0cd834125096331.Y3JvcCwxNjYyLDEzMDAsMTY4LDA.png' />
        <div className='details'>
          <h1>Portfoilio</h1>
          <ul>
            <l>
              <a href='#'>
                <FaLink />
              </a>
            </l>
            <l>
              <a href='#'>
                <FaLink />
              </a>
            </l>
          </ul>
        </div>
      </div> */
}
{
}
