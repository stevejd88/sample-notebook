import React from "react";
import Logo from "../../assets/img/sb-logo.jpg";
import DOD from "../../assets/img/dod-logo.jpg";

import "./contact.scss";

const Contact = (props) => {
  return (
    <section id='contact-container'>
      <div className='contact-imgs'>
        <img
          src={Logo}
          alt='Starbase Logo'
          className='img-fluid contact-starbase'
        />
        <img
          src={DOD}
          alt='Department of Defense Starbase'
          className='img-fluid dod'
        />
      </div>

      <div className='contact-links '>
        <a
          href='STARBASEAustin.org'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-websites'
        >
          <p>STARBASEAustin.org</p>
        </a>
        <a
          href='https://dodstarbase.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='contact-websites'
        >
          <p>DoDSTARBASE.org</p>
        </a>
        <div className='social-link'>
          <a
            href='https://www.facebook.com/TexasSTARBASEAustin/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook-square fa-5x'></i>
            <p>Starbase Austin</p>
          </a>
        </div>
        <div className='social-link'>
          <a
            href='https://www.instagram.com/starbaseaustin/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram fa-5x'></i>
            <p>starbaseaustin</p>
          </a>
        </div>
        <div className='social-link'>
          <a
            href='https://twitter.com/starbaseaustin?lang=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter-square fa-5x'></i>
            <p>@STARBASEAustin</p>
          </a>
        </div>
      </div>

      <div className='contact-address'>
        <p>Texas STARBASE Austin</p>
        <p>Camp Mabry</p>
        <p>2200 West 35th St. Bldg. 31</p>
        <p>Austin, TX 78703</p>
      </div>
    </section>
  );
};

export default Contact;
