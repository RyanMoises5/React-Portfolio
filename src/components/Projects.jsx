import pawfolio from '../assets/projects/pawfolio.png';
import eventify from '../assets/projects/eventify.png';
import bookServiceApp from '../assets/projects/bookServiceApp.png'

const projects = [
  {
    title: "Pawfolio",
    image: pawfolio,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    languages: ['Javascript', "HTML", "CSS", 'MERN stack', 'bcrypt', 'GraphQL'],
    url: "https://pawfolio-3wj8.onrender.com/"
  },
  {
    title: "Eventify",
    image: eventify,
    desc: "Wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa.",
    languages: ['Javascript', "HTML", "CSS", 'bcrypt', 'SQL'],
    url: "https://limitless-scrubland-89760-c5cfabe4f1c5.herokuapp.com/"
  },
  {
    title: "Book Service App",
    image: bookServiceApp,
    desc: "Test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test.",
    languages: ['Javascript', "HTML", "CSS", 'Third-party APIs'],
  }
]


function Projects() {
  return (
    <div className='container-fluid border-gray-600 border-b-4 border-solid flex-block items-center py-14 mx-[5%]' id="projects">
      {projects.map((item, index) => (
        <div key={index} className='container-fluid flex relative py-20'>
        {index % 2 === 0 ? (
          <>
            <a href={item.url || null} target='blank' className='inline-flex right-0 max-w-[45vh]'>
              <img src={item.image} className='border-solid border-8 border-gray-800 rounded-lg'></img>
            </a>
            <div className='px-10'>
              <a href={item.url || null} target='blank'>
                <h3 className='text-lg font-semibold italic'>{item.title}</h3>
              </a>
              <br/>
              <p>{item.desc}</p>
              <div className='inline-flex py-10'>
              {item.languages.map((item, index) => (
                <p key={index} className='bg-amber-100 text-slate-700 font-semibold text-nowrap px-1 mx-1'>{item}</p>
               ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='px-10'>
              <a href={item.url || null} target='blank'>
                <h3 className='text-lg font-semibold italic'>{item.title}</h3>
              </a>
              <br/>
              <p>{item.desc}</p>
              <div className='inline-flex py-10'>
              {item.languages.map((item, index) => (
                <p key={index} className='bg-amber-100 text-slate-700 font-semibold text-nowrap px-1 mx-1'>{item}</p>
               ))}
              </div>
            </div>
            <a href={item.url || null} target='blank' className='inline-flex right-0 max-w-[45vh]'>
              <img src={item.image} className='border-solid border-8 border-gray-800 rounded-lg'></img>
            </a>
          </>
        )}
        </div>
      ))}
    </div>
  );
}

export default Projects;