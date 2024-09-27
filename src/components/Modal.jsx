function Modal({ setOpenModal }) {
  // function HealthMap({ pet, pin }) {
  //       pin.readyPin('')

  // console.log(modalState)
  // function onCloseModal() {
  //   setOpenModal(false);
  //   setEmail('');
  // }

  const sendEmailClickHandler = function (event) {
    event.preventDefault();

    console.log("Hiiii!")
  }

  const closeModalClickHandler = function (event) {
    event.preventDefault();

    setOpenModal(false);
  }

  return (
    <div className="modal bg-gray-700 opacity-100 text-amber-100 rounded-lg p-8 w-[50%] leading-loose">
      <form className="flex flex-col font-semibold" onSubmit={sendEmailClickHandler}>
        <h3 className='text-2xl'>Leave a Message</h3>
        <label htmlFor="name">Name:</label>
        <input type="text" name="species" className="text-black rounded"></input>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" className="text-black rounded"></input>
        <label htmlFor="message">Message:</label>
        <textarea type="email" name="email" placeholder="Want to chat?" className="text-black rounded"></textarea>
        <br />
        <button className="bg-orange-400 rounded text-slate-800 font-bold p-2 border-2 border-orange-400 border-solid transition hover:text-orange-400 hover:bg-slate-700 mx-2" onClick={sendEmailClickHandler}>Send Message</button>
        <br />
        <button className="bg-orange-400 rounded text-slate-800 font-bold p-2 border-2 border-orange-400 border-solid transition hover:text-orange-400 hover:bg-slate-700 mx-2" onClick={closeModalClickHandler}>Close Form</button>
      </form>
    </div>
  )
}

export default Modal;