import Modal from "./Modal";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiUdemy } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="footer bottom-0 container-fluid relative bg-slate-800 opacity-100 z-50 grid grid-cols-2 px-28 py-10" id='footer'>
        <div className='left'>
          <div className='flex my-auto py-1' id="email">
            <div onClick={() => setOpenModal(true)} className="hover:cursor-pointer transition hover:scale-125">
              <TfiEmail size={50}/>
            </div>
            <p className='mx-4 my-auto'>ryan.a.moises@gmail.com</p>
          </div>
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
        </div>
        <div className='right'>
          <div className='flex my-auto py-1' id="leetcode">    
            <a href="https://leetcode.com/u/rmoises/" target="blank" className="transition hover:scale-125"> 
              <SiLeetcode size={50}/>
            </a>    
            <p className='mx-4 my-auto'>leetcode.com/u/rmoises</p>
          </div>
          <div className='flex my-auto py-1' id="udemy">    
            <a href="https://www.udemy.com/user/ryan-moises/" target="blank" className="transition hover:scale-125"> 
              <SiUdemy size={50}/>
            </a>    
            <p className='mx-4 my-auto'>udemy.com/user/ryan-moises</p>
          </div>
        </div>
      </div>

      <div className={`modal-container ${openModal ? null : `hidden`} fixed z-50 left-0 top-0 bg-black bg-opacity-80 h-screen w-screen flex justify-center items-center`}>
        <Modal setOpenModal={setOpenModal} />
        {/* <HealthInfo pet={data.pet} pin={{pinState, readyPin}}/> */}
      </div>
    </>
  );
}

export default Footer;