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
      <div className={`text-${theme} rounded-lg p-4 sm:p-6 lg:p-12 leading-loose`}>
        <form className="flex flex-col font-semibold" ref={form} onSubmit={sendEmailClickHandler}>
          <h3 className={`text-${theme}-primary text-lg sm:text-xl lg:text-2xl font-bold mb-4`}>
            Leave a Message - <span className="block sm:inline text-sm sm:text-base lg:text-lg">ryan.a.moises@gmail.com</span>
          </h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base">Name:</label>
              <input 
                type="text" 
                name="user_name" 
                className="text-black rounded w-full p-2 text-sm sm:text-base"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base">Email:</label>
              <input 
                type="email" 
                name="user_email" 
                className="text-black rounded w-full p-2 text-sm sm:text-base"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm sm:text-base">Message:</label>
              <textarea 
                name="message" 
                placeholder="Want to connect?" 
                className="text-black rounded w-full p-2 h-20 sm:h-24 resize-none text-sm sm:text-base"
              />
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 flex flex-col items-center gap-4">
            <button 
              onClick={sendEmailClickHandler} 
              className={`emailBtn-${theme} rounded font-bold px-4 py-2 sm:px-6 sm:py-3 border-2 border-solid transition text-sm sm:text-base w-full sm:w-auto`}
            >
              Send Message
            </button>
            <p className="text-xs sm:text-sm text-center">{emailMessage}</p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <>
      <div className={`footer bottom-0 container-fluid relative bg-${theme}-secondary opacity-100 z-50 px-4 sm:px-8 lg:px-14 py-6 sm:py-8 lg:py-10`} id='footer'>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Email Form Section */}
          <div className='lg:col-span-2 order-1 lg:order-1'>
            <EmailForm />
          </div>
          
          {/* Social Links Section */}
          <div className='flex flex-row lg:flex-col justify-center lg:justify-start items-center lg:items-start content-center p-4 sm:p-6 lg:p-8 gap-4 lg:gap-2 order-2 lg:order-2'>
            {/* LinkedIn */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start py-1 lg:py-2' id="linkedin">    
              <a href="https://www.linkedin.com/in/ryan-moises/" target="blank" className="transition hover:scale-125"> 
                <FaLinkedin size={40} className="sm:w-12 sm:h-12 lg:w-12 lg:h-12"/>
              </a>    
              <p className='text-xs sm:text-sm lg:text-base lg:mx-4 lg:my-auto text-center lg:text-left mt-1 lg:mt-0'>ryan-moises</p>
            </div>
            
            {/* GitHub */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start py-1 lg:py-2' id="github">    
              <a href="https://github.com/RyanMoises5" target="blank" className="transition hover:scale-125"> 
                <FaGithub size={40} className="sm:w-12 sm:h-12 lg:w-12 lg:h-12"/>
              </a>    
              <p className='text-xs sm:text-sm lg:text-base lg:mx-4 lg:my-auto text-center lg:text-left mt-1 lg:mt-0'>RyanMoises5</p>
            </div>
            
            {/* LeetCode */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start py-1 lg:py-2' id="leetcode">    
              <a href="https://leetcode.com/u/rmoises/" target="blank" className="transition hover:scale-125"> 
                <SiLeetcode size={40} className="sm:w-12 sm:h-12 lg:w-12 lg:h-12"/>
              </a>    
              <p className='text-xs sm:text-sm lg:text-base lg:mx-4 lg:my-auto text-center lg:text-left mt-1 lg:mt-0'>rmoises</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;