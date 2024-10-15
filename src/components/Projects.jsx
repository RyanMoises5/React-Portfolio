import pawfolio from '../assets/projects/pawfolio.png';
import eventify from '../assets/projects/eventify.png';
import bookServiceApp from '../assets/projects/bookServiceApp.png'
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from '../utils/ThemeContext';

function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Pawfolio",
      image: pawfolio,
      desc: "Pet care tracking app that allows a user to add pets to their account, add reminders for each pet, and keep track of health details of each pet.",
      languages: ['Javascript', 'MERN', 'Mongoose ODM', 'JWT', 'Bcrypt', 'Apollo GraphQL', 'Semantics UI React', 'Webpack'],
      github: "https://github.com/RyanMoises5/PawFolio",
      url: "https://pawfolio-3wj8.onrender.com/"
    },
    {
      title: "Eventify",
      image: eventify,
      desc: "Event managing app that allows user to create, edit, organize, and view posted events from other registered users, and view profile details of other users.",
      languages: ['Javascript', 'SQL', 'Sequelize ORM', 'Bcrypt', 'SQL', 'Handlebars.js', 'Materialize CSS'],
      github: "https://github.com/Santy520/Eventify",
      url: "https://limitless-scrubland-89760-c5cfabe4f1c5.herokuapp.com/"
    },
    {
      title: "Book Service App",
      image: bookServiceApp,
      desc: "Web app that allows users to search book details through Open Library and NYT Best Sellers, find EBooks versions on Google Books and Open Library, and save entries for later use. Heavy focus on string and array manipulation and logic for data from third party APIs.",
      languages: ['Javascript', "JQuery", 'Third-party APIs'],
      github: "https://github.com/RyanMoises5/BookService-App",
    }
  ]

  const ProjectImage = function({item}) {
    return (
      <div className='inline-flex right-0 max-w-[45vh]'>
        <img src={item.image} className='border-solid border-8 border-gray-800 rounded-lg '></img>
      </div>
    )
  }

  const ProjectDetails = function({item}) {
    return (
      <div className='px-10'>
        <h3 className='text-lg font-semibold italic'>{item.title}</h3>
        <br/>
        <p>{item.desc}</p>
        <div className='inline-flex py-10'>
        {item.languages.map((item, index) => (
          <p key={index} className={`bg-${theme}-accent text-${theme}-secondary font-semibold text-nowrap px-1 mx-1`}>{item}</p>
          ))}
        </div>
        <div className='container-fluid flex relative my-4'>
          {item.url ? (
            <a href={item.url} target='blank' className={`bg-${theme}-accent-secondary text-${theme}-secondary rounded font-bold p-2 border-2 border-orange-400 border-solid transition hover:-translate-x-0.5 hover:-translate-y-0.5 mx-2`}>Live Site</a>
          ) : null}
          <a href={item.github || null} target='blank' className={`bg-${theme}-accent-secondary rounded text-${theme}-secondary font-bold p-2 border-2 border-orange-400 border-solid transition hover:-translate-x-0.5 hover:-translate-y-0.5 mx-2`}>See Code</a>
        </div>
      </div>
    )
  }

  const ProjectDivider = function({index}) {
    return (
      <div className={`text-${theme}-primary relative flex py-5`}>
        <div className="flex-grow relative border-t border-amber-800 mx-8"></div>
        <a href={`#${projects[index+1].title}`} className='group mb-8'>
          <IoIosArrowDown size={40}/>
        </a>
        <div className="flex-grow border-t border-amber-900 mx-8"></div>
      </div>
    )
  }

  // Hover animation needs work
  // <a href={`#${projects[index+1].title}`} className='group mb-8'>
  //   <div className='absolute rounded-lg text-transparent transition group-hover:bg-gray-800 h-14'>------</div>
  //   <div className='transition group-hover:translate-y-5'><IoIosArrowDown size={40}/></div>
  // </a>


  return (
    <div className='projects container-fluid pt-32 mx-[5%]' id="projects">
      <h2 className='text-4xl text-center font-semibold'>Projects</h2>
      {projects.map((item, index) => (
          <div key={index} id={item.title}>
            <div className='container-fluid flex relative py-32' >
            {index % 2 === 0 ? (
              <>
                <ProjectImage item={item} />
                <ProjectDetails item={item} />
              </>
            ) : (
              <>
                <ProjectDetails item={item} />
                <ProjectImage item={item} />
              </>
              )}
            </div>
            {index < projects.length - 1 ? (
              <ProjectDivider index={index}/>
            ) : null}
          </div>
      ))}
    </div>
  );
}

export default Projects;