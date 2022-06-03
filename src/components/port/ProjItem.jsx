import React from 'react';
import './projItem.css';

const projItem = () => {
  return (
    <section>
      <div class='row'>
        <div class='col text-center mb-5'>
          <h1 class='display-4'>Bootstrap 4 Cards With Background Image</h1>
          <p class='lead'>
            Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas
            pulvinar.{' '}
          </p>
        </div>
      </div>
      <div class='row'>
        <div class='col-sm-12 col-md-6 col-lg-4 mb-4'>
          <div
            class='card text-white card-has-bg click-col'
            style="background-image:url('https://source.unsplash.com/600x900/?tech,street');">
            <img
              class='card-img d-none'
              src='https://source.unsplash.com/600x900/?tech,street'
              alt='Goverment Lorem Ipsum Sit Amet Consectetur dipisi?'
            />
            <div class='card-img-overlay d-flex flex-column'>
              <div class='card-body'>
                <small class='card-meta mb-2'>Thought Leadership</small>
                <h4 class='card-title mt-0 '>
                  <a class='text-white' herf='#'>
                    Goverment Lorem Ipsum Sit Amet Consectetur dipisi?
                  </a>
                </h4>
                <small>
                  <i class='far fa-clock'></i> October 15, 2020
                </small>
              </div>
              <div class='card-footer'>
                <div class='media'>
                  <img
                    class='mr-3 rounded-circle'
                    src='https://assets.codepen.io/460692/internal/avatars/users/default.png'
                    alt='Generic placeholder image'
                    style='max-width:50px'
                  />
                  <div class='media-body'>
                    <h6 class='my-0 text-white d-block'>Oz Coruhlu</h6>
                    <small>Director of UI/UX</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projItem;
