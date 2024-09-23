import pawfolio from '../assets/projects/pawfolio.png';
import eventify from '../assets/projects/eventify.png';
import bookServiceApp from '../assets/projects/bookServiceApp.png'
import { IoIosArrowDown } from "react-icons/io";

function Projects() {
  
  const projects = [
    {
      title: "Pawfolio",
      image: pawfolio,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      languages: ['Javascript', "HTML", "CSS", 'MERN stack', 'bcrypt', 'GraphQL'],
      github: "https://github.com/RyanMoises5/PawFolio",
      url: "https://pawfolio-3wj8.onrender.com/"
    },
    {
      title: "Eventify",
      image: eventify,
      desc: "Wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa.",
      languages: ['Javascript', "HTML", "CSS", 'bcrypt', 'SQL'],
      github: "https://github.com/Santy520/Eventify",
      url: "https://limitless-scrubland-89760-c5cfabe4f1c5.herokuapp.com/"
    },
    {
      title: "Book Service App",
      image: bookServiceApp,
      desc: "Test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test.",
      languages: ['Javascript', "HTML", "CSS", 'Third-party APIs'],
      github: "https://github.com/RyanMoises5/BookService-App",
    }
  ]

  return (
    <div className='container-fluid flex-block items-center py-20 mx-[5%]' id="projects">
      {projects.map((item, index) => (
        <>
          <div key={index} className='container-fluid flex relative py-32' id={item.title}>
          {index % 2 === 0 ? (
            <>
              <div className='inline-flex right-0 max-w-[45vh]'>
                <img src={item.image} className='border-solid border-8 border-gray-800 rounded-lg '></img>
              </div>
              <div className='px-10'>
                <h3 className='text-lg font-semibold italic'>{item.title}</h3>
                <br/>
                <p>{item.desc}</p>
                <div className='inline-flex py-10'>
                {item.languages.map((item, index) => (
                  <p key={index} className='bg-amber-100 text-slate-700 font-semibold text-nowrap px-1 mx-1'>{item}</p>
                  ))}
                </div>
                <div className='container-fluid flex relative my-4'>
                  {item.url ? (
                    <a href={item.url} target='blank' className='bg-orange-500 rounded text-slate-800 font-bold p-2 border-2 border-orange-500 border-solid transition hover:-translate-x-0.5 hover:-translate-y-0.5 mx-2'>Live Site</a>
                  ) : null}
                  <a href={item.github || null} target='blank' className='bg-orange-500 rounded text-slate-800 font-bold p-2 border-2 border-orange-500 border-solid transition hover:-translate-x-0.5 hover:-translate-y-0.5 mx-2'>See Code</a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='px-10'>
                <h3 className='text-lg font-semibold italic'>{item.title}</h3>
                <br/>
                <p>{item.desc}</p>
                <div className='inline-flex py-10'>
                {item.languages.map((item, index) => (
                  <p key={index} className='bg-amber-100 text-slate-700 font-semibold text-nowrap px-1 mx-1'>{item}</p>
                  ))}
                </div>
                <div className='container-fluid flex relative my-4'>
                {item.url ? (
                    <a href={item.url} target='blank' className='bg-orange-500 rounded text-slate-800 font-bold p-2 border-2 border-orange-500 border-solid transition hover:-translate-x-0.5 hover:-translate-y-0.5 mx-2'>Live Site</a>
                  ) : null}
                  <a href={item.github || null} target='blank' className='bg-orange-500 rounded text-slate-800 font-bold p-2 border-2 border-orange-500 border-solid transition hover:-translate-x-0.5 hover:-translate-y-0.5 mx-2'>See Code</a>
                </div>
              </div>
              <div className='inline-flex right-0 max-w-[45vh]'>
                <img src={item.image} className='border-solid border-8 border-gray-800 rounded-lg '></img>
              </div>
            </>
          )}
          </div>
          {index < projects.length - 1 ? (
            <>
              <div className="relative flex py-5 text-amber-700">
                <div className="flex-grow border-t border-amber-900 mx-8"></div>
                <a href={`#${projects[index+1].title}`} className='mb-8' >
                  <IoIosArrowDown size={30}/>
                </a>
                <div className="flex-grow border-t border-amber-900 mx-8"></div>
              </div>
            </>
          ) : null}
        </>
      ))}
    </div>
  );
}

export default Projects;