import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiUdemy } from "react-icons/si";
import { useTheme } from '../utils/ThemeContext';
import emailjs from '@emailjs/browser';

function Footer() {
  const { theme } = useTheme();
  const form = useRef();
  const [emailMessage, setEmailMessage] = useState('');

  const sendEmailClickHandler = function (event) {
    event.preventDefault();

    // TODO: Prevent form from clearing when the message did not send successfully

    // Validation for name
    if (form.current.user_name.value === '') {
      setEmailMessage('Please leave your name in the provided field.');
      return false;
    }

    // Validation for email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.current.user_email.value)) {
      setEmailMessage('Please enter a valid email address.');
      return false;
    }

    // Validation for message
    if (form.current.message.value === '') {
      setEmailMessage('Please leave a message in the provided field.');
      return false;
    }

    setEmailMessage('Sending email...')

    const date = new Date();
    const hour = date.getHours()%12;
    const min = date.getMinutes();

    emailjs
    .sendForm("service_fm2d4n5", "template_ezn3v3e", form.current, {
      publicKey: "GTgEOCNJgtMjgyfpg",
    })
    .then(
      () => {
        setEmailMessage(`Email has been successfully sent at ${hour}:${min}`)
      },
      (error) => {
        setEmailMessage(`Email failed to send (${hour}:${min}). Please try contacting me in another way.`)
      },
    );
  }

  const EmailForm = function () {
    return (
      <div className={`text-${theme} rounded-lg p-12 leading-loose`}>
        <form className="flex flex-col font-semibold" ref={form} onSubmit={sendEmailClickHandler}>
          <h3 className={`text-${theme}-primary text-2xl font-bold`}>Leave a Message - <span>ryan.a.moises@gmail.com</span></h3>
          <br />
          <label htmlFor="name">Name:</label>
          <input type="text" name="user_name" className={`text-black rounded`}></input>
          <label htmlFor="email">Email:</label>
          <input type="email" name="user_email" className={`text-black rounded`}></input>
          <label htmlFor="message">Message:</label>
          <textarea name="message" placeholder="Want to connect?" className={`text-black rounded`}></textarea>
          <br />
          <div className="grid grid-cols-2 justify-evenly">
            <button onClick={sendEmailClickHandler} className={`emailBtn-${theme} rounded font-bold p-2 border-2 border-solid transition mx-2 col-span-1`}>Send Message</button>
            <p className="col-span-1 justify-self-center self-center">{emailMessage}</p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <>
      <div className={`footer bottom-0 container-fluid relative bg-${theme}-secondary opacity-100 z-50 grid grid-cols-3 px-14 py-10`} id='footer'>
        <div className='left col-span-2'>
          <EmailForm />
        </div>
        <div className='right content-center p-8'>
          <div className='flex my-auto py-1' id="linkedin">    
            <a href="https://www.linkedin.com/in/ryan-moises/" target="blank" className="transition hover:scale-125"> 
              <FaLinkedin size={50}/>
            </a>    
            <p className='mx-4 my-auto'>linkedin.com/in/ryan-moises</p>
          </div>
          <div className='flex my-auto py-1' id="github">    
            <a href="https://github.com/RyanMoises5" target="blank" className="transition hover:scale-125"> 
              <FaGithub size={50}/>
            </a>    
            <p className='mx-4 my-auto'>github.com/RyanMoises5</p>
          </div>
          <div className='flex my-auto py-1' id="leetcode">    
            <a href="https://leetcode.com/u/rmoises/" target="blank" className="transition hover:scale-125"> 
              <SiLeetcode size={50}/>
            </a>    
            <p className='mx-4 my-auto'>leetcode.com/u/rmoises</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;