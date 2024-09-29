import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Modal({ setOpenModal }) {
  const form = useRef();

  const sendEmailClickHandler = function (event) {
    event.preventDefault();

    console.log(process.env.PUBLIC_KEY, process.env.SERVICE_ID, process.env.TEMPLATE_ID);
  //   emailjs
  //   .sendForm("service_fm2d4n5", "template_ezn3v3e", form.current, {
  //     publicKey: "GTgEOCNJgtMjgyfpg",
  //   })
  //   .then(
  //     () => {
  //       console.log('SUCCESS!');
  //     },
  //     (error) => {
  //       console.log('FAILED...', error.text);
  //     },
  //   );
  // }

  const closeModalClickHandler = function (event) {
    event.preventDefault();

    setOpenModal(false);
  }

  return (
    <div className="modal bg-gray-700 opacity-100 text-amber-100 rounded-lg p-8 w-[50%] leading-loose">
      <form className="flex flex-col font-semibold" ref={form} onSubmit={sendEmailClickHandler}>
        <h3 className='text-2xl'>Leave a Message</h3>
        <label htmlFor="name">Name:</label>
        <input type="text" name="user_name" className="text-black rounded"></input>
        <label htmlFor="email">Email:</label>
        <input type="email" name="user_email" className="text-black rounded"></input>
        <label htmlFor="message">Message:</label>
        <textarea name="message" placeholder="Want to chat?" className="text-black rounded"></textarea>
        <br />
        <button className="bg-orange-400 rounded text-slate-800 font-bold p-2 border-2 border-orange-400 border-solid transition hover:text-orange-400 hover:bg-slate-700 mx-2" onClick={sendEmailClickHandler}>Send Message</button>
        <br />
        <button className="bg-orange-400 rounded text-slate-800 font-bold p-2 border-2 border-orange-400 border-solid transition hover:text-orange-400 hover:bg-slate-700 mx-2" onClick={closeModalClickHandler}>Close Form</button>
      </form>
    </div>
  )
}

export default Modal;