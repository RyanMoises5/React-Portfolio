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
      <div className='flex-shrink-0 w-full md:w-1/2 lg:w-2/5 px-4 md:px-6 lg:px-10'>
        <img 
          src={item.image} 
          alt={`${item.title} project screenshot`}
          className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-solid border-4 border-${theme}-primary rounded-lg object-cover object-top`}
        />
      </div>
    )
  }

  const ProjectDetails = function({item}) {
    return (
      <div className='flex-1 px-4 md:px-6 lg:px-10 mt-4 md:mt-0'>
        <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-3 md:mb-4'>{item.title}</h3>
        
        <p className='text-sm sm:text-base leading-relaxed mb-4 md:mb-6'>{item.desc}</p>
        
        <div className='flex flex-wrap gap-2 mb-6 md:mb-8'>
          {item.languages.map((language, langIndex) => (
            <span 
              key={langIndex} 
              className={`bg-${theme}-accent text-${theme}-secondary font-semibold text-xs sm:text-sm px-2 py-1 rounded whitespace-nowrap`}
            >
              {language}
            </span>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row gap-3'>
          {item.url ? (
            <a 
              href={item.url} 
              target='_blank' 
              rel='noopener noreferrer'
              className={`bg-${theme}-accent-secondary text-${theme}-secondary rounded font-bold px-4 py-2 text-sm sm:text-base transition hover:-translate-x-1 hover:-translate-y-1 text-center`}
            >
              Live Site
            </a>
          ) : null}
          <a 
            href={item.github || '#'} 
            target='_blank' 
            rel='noopener noreferrer'
            className={`bg-${theme}-accent-secondary text-${theme}-secondary rounded font-bold px-4 py-2 text-sm sm:text-base transition hover:-translate-x-1 hover:-translate-y-1 text-center`}
          >
            See Code
          </a>
        </div>
      </div>
    )
  }

  const ProjectDivider = function({index}) {
    return (
      <div className={`text-${theme}-primary relative flex items-center py-6 md:py-8`}>
        <div className={`flex-grow border-t border-${theme}-secondary mx-4 md:mx-8`}></div>
        {index + 1 < projects.length && (
          <a href={`#${projects[index+1].title}`} className='group px-2'>
            <IoIosArrowDown size={32} className="sm:w-10 sm:h-10 transition-transform group-hover:translate-y-1"/>
          </a>
        )}
        <div className={`flex-grow border-t border-${theme}-secondary mx-4 md:mx-8`}></div>
      </div>
    )
  }

  return (
    <div className='projects container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 max-w-7xl' id="projects">
      <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-12 md:mb-16'>Projects</h2>
      
      {projects.map((item, index) => (
        <div key={index} id={item.title} className='mb-8 md:mb-12'>
          <div className='flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 lg:py-20'>
            {index % 2 === 0 ? (
              <>
                <ProjectImage item={item} />
                <ProjectDetails item={item} />
              </>
            ) : (
              <div className='flex flex-col w-full'>
                <div className='md:hidden'>
                  <ProjectImage item={item} />
                </div>
                <div className='flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12'>
                  <ProjectDetails item={item} />
                  <div className='hidden md:block flex-shrink-0 md:w-1/2 lg:w-2/5'>
                    <div className='px-4 md:px-6 lg:px-10'>
                      <img 
                        src={item.image} 
                        alt={`${item.title} project screenshot`}
                        className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-solid border-4 border-${theme}-primary rounded-lg object-cover object-top`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {index < projects.length - 1 && (
            <ProjectDivider index={index}/>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;