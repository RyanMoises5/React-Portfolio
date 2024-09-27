import portrait from '../assets/portrait.jpg';
import resume from '../assets/resume.pdf';

function About() {
  return (
    <>
      <div className='container-fluid flex items-center pb-40 mx-10 h-[85vh]' id='about'>
        <img src={portrait} className='max-h-80'/>
        <div className='p-8'>
          <h2 className='text-5xl leading-tight'>Hello, I am <span className='bg-amber-100 rounded text-slate-700 font-bold px-1'>Ryan Moises</span></h2>
          <br/>
          <h2 className='text-3xl'>I am a full-stack web developer.</h2>
          <br/>
          <p>Full Stack Web Developer with a background in engineering and healthcare information technology. Effective at problem solving and quick at incorporating new skills into projects. Strong focus on thoroughness, clean code, user experience, team collaboration and conflict resolution. Proficient in MERN stack and willing to learn new technologies.</p>
          <br/>
          <a href={resume} target='blank' className='bg-amber-200 rounded text-slate-700 font-bold p-2 border-2 border-amber-200 border-solid hover:bg-transparent hover:text-amber-200'>Get my Resume</a>
        </div>
      </div>
    </>
  );
}

export default About;