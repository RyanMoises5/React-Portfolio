import portrait from '../assets/portrait.jpg';

function About() {
  return (
    <>
      <div className='container-fluid flex items-center pb-40 mx-10 h-[80vh]' id='about'>
        <img src={portrait} className='max-h-80'/>
        <div className='p-8'>
          <h2 className='text-3xl'>Hello, I am <span className='bg-amber-200 rounded text-slate-700 font-bold px-1'>Ryan Moises</span></h2>
          <br/>
          <h2 className='text-3xl'>I am an emerging web developer.</h2>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br/>
          <button className='bg-amber-200 rounded text-slate-700 font-bold p-2 border-2 border-amber-200 border-solid hover:bg-transparent hover:text-amber-200'>Get my Resume</button>
        </div>
      </div>
    </>
  );
}

export default About;