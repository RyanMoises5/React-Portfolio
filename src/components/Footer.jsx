import { Button, Label, Modal, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiUdemy } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

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

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Leave me an e-mail</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your message" />
              </div>
              <Textarea id="password" type="password" required />
            </div>
            <Button>Send Email</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Footer;