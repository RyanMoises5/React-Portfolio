import portrait from '../assets/portrait.jpg';
import resume from '../assets/resume.pdf';
import { useTheme } from '../utils/ThemeContext';

function About() {
  const { theme } = useTheme();

  return (
    <>
      <div className='container mx-auto px-4 md:px-8 lg:px-10 py-16 md:py-24 lg:py-32' id='about'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12'>
          {/* Portrait Image */}
          <div className='flex-shrink-0'>
            <img 
              src={portrait} 
              className={`w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover border-solid border-4 border-${theme}-secondary rounded-lg`}
              alt="Ryan Moises portrait"
            />
          </div>
          
          {/* Content */}
          <div className='flex-1 text-center lg:text-left max-w-2xl'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 md:mb-6'>
              Hello, I am{' '}
              <span className={`bg-${theme}-accent text-${theme}-secondary rounded font-bold px-2 py-1 inline-block`}>
                Ryan Moises
              </span>
            </h2>
            
            <h3 className='text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6'>
              I am a full-stack web developer.
            </h3>
            
            <p className='text-sm sm:text-base leading-relaxed mb-6 md:mb-8'>
              Full Stack Web Developer with a background in engineering and healthcare information technology. 
              Effective at problem solving and quick at incorporating new skills into projects. Strong focus on 
              thoroughness, clean code, user experience, team collaboration and conflict resolution. Proficient 
              in MERN stack and adept in learning new technologies.
            </p>
            
            <a 
              href={resume} 
              target='_blank' 
              rel='noopener noreferrer'
              className={`resumeBtn-${theme} bg-${theme}-accent text-${theme}-secondary rounded font-bold px-4 py-3 border-2 border-solid inline-block transition-all duration-300 hover:scale-105 text-sm sm:text-base`}
            >
              Get my Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;