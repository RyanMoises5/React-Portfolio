import portrait from '../assets/portrait.jpg';

function About() {
  return (
    <div className='container-fluid border-gray-600 border-b-4 border-solid flex items-center pb-40 mx-10 h-[85vh]' id='about'>
      <img src={portrait} className='max-h-80'/>
      <div className='p-8'>
        <h2 className='text-3xl'>Hello, I am Ryan Moises.</h2>
        <br/>
        <h2 className='text-3xl'>I am an emerging web developer.</h2>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default About;