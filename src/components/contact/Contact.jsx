import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { BsEnvelopeOpenFill, BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bp8vz1l',
        'template_o0avvvz',
        form.current,
        'A5ETr3CKMhR5KSTxg'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <a href='mailto:muddasarajmal@gmail.com' target='_blank'>
            <article className='contact__option'>
              <BsEnvelopeOpenFill className='contact__option__icon' />
              <h4>Email</h4>
            </article>
          </a>
          <a href='https://m.me/muddasar.de' target='_blank'>
            <article className='contact__option'>
              <BsMessenger className='contact__option__icon' />
              <h4>Messenger</h4>
            </article>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone+923405963463'
            target='_blank'>
            <article className='contact__option'>
              <IoLogoWhatsapp className='contact__option__icon' />
              <h4>Whastapp</h4>
            </article>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='5'
            placeholder='Your Message'
            required
          />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
