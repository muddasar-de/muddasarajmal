import React from 'react';
import './portfolio.css';
import Project1 from '../../assests/logo-shoes.jpg';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='#'>
              <img src={Project1}></img>
            </a>
          </div>
          <h3>Logo Shoes</h3>
          <div className='portfolio__cta'>
            <a href='#' className='btn'>
              Github
            </a>
            <a href='#' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='#'>
              <img src={Project1}></img>
            </a>
          </div>
          <h3>Logo Shoes</h3>
          <div className='portfolio__cta'>
            <a href='#' className='btn'>
              Github
            </a>
            <a href='#' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
