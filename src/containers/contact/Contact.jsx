import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Result = () => {
  return <p>Your Message has been successfully sent. I'll respond very soon</p>;
};

const Contact = (props) => {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_w57j69k', e.target, 'fJb4jYOwhpDn4hr6D')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <div className="portfolio__contact section__padding">
      <div className="portfolio__contact-content-header">
        <div />
        <h1 className="gradient__text">Contact Me</h1>
        <p>Get in touch</p>
      </div>

      <div className="portfolio__contact-content">
        <form action="" onSubmit={sendEmail}>
          <div className="formWord">
            <h3>Full Name:</h3>
            <input className="input100" type="text" name="fullName" required />

            <h3>Phone Number:</h3>
            <input className="input100" type="text" name="phone" required />

            <h3>Enter Email:</h3>
            <input className="input100" type="text" name="email" required />
          </div>

          <div className="formWord">
            <h3>Message:</h3>
            <textarea className="textHeight" name="message" required></textarea>
            <br />
            <button>
              <a>Submit</a> 
              {/* 298 * 1425 */}
            </button>

            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
