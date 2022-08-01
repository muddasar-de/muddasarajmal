import React from 'react';
import './services.css';
import { GrWordpress, GrReactjs } from 'react-icons/gr';
import { FaUserCheck } from 'react-icons/fa';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__icon'>
            <h5>
              <GrReactjs />
            </h5>
          </div>
          <div className='service__head'>
            <h3>React Development</h3>
            <small>
              Have experience in designing fast and responsive websites that
              give clients the opportunity to reach a larger audience through
              the Internet.
            </small>
          </div>
        </article>

        <article className='service'>
          <div className='service__icon'>
            <h5>
              <GrWordpress />
            </h5>
          </div>
          <div className='service__head'>
            <h3>WordPress Designing</h3>
            <small>
              Have experience in designing and implementing search
              engine-friendly websites for companies using the WordPress
              creation tool from scratch.
            </small>
          </div>
        </article>
        <article className='service'>
          <div className='service__icon'>
            <h5>
              <FaUserCheck />
            </h5>
          </div>
          <div className='service__head'>
            <h3>UI/UX</h3>
            <small>
              Have experience in creating products/projects with a good user
              experience according to the requirements of client.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
