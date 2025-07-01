import portrait from '../assets/portrait.jpg';
import resume from '../assets/resume.pdf';
import { useTheme } from '../utils/ThemeContext';

function About() {
  const { theme } = useTheme();

  return (
    <>
      <div className='container flex py-32 mx-10' id='about'>
        <img src={portrait} className={`max-h-80 border-solid border-4 border-${theme}-secondary rounded-lg`}/>
        <div className='mx-8 min-w-sm'>
          <h2 className='text-5xl leading-tight'>Hello, I am <span className={`bg-${theme}-accent text-${theme}-secondary rounded font-bold px-1`}>Ryan Moises</span></h2>
          <br/>
          <h2 className='text-3xl'>I am a full-stack web developer.</h2>
          <br/>
          <p>Full Stack Web Developer with a background in engineering and healthcare information technology. Effective at problem solving and quick at incorporating new skills into projects. Strong focus on thoroughness, clean code, user experience, team collaboration and conflict resolution. Proficient in MERN stack and willing to learn new technologies.</p>
          <br/>
          <a href={resume} target='blank' className={`resumeBtn-${theme} bg-${theme}-accent text-${theme}-secondary rounded font-bold p-2 border-2 border-solid`}>Get my Resume</a>
        </div>
      </div>
    </>
  );
}

export default About;