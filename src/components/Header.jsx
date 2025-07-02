import { useTheme } from '../utils/ThemeContext';
import Navbar from './NavBar';

function Header() {
  const { theme, toggleTheme } = useTheme();

  // const navButtons = ["About", "Skills", "Projects", "Connect"]

  return (
    <>
    <div className={`header sticky top-0 container-fluid bg-${theme}-secondary opacity-100 z-40 py-4 flex items-center justify-between font-bold`}>
      {/* Email - responsive text sizing and spacing */}
      <h1 className={`text-sm sm:text-base lg:text-xl text-${theme}-accent mx-4 sm:mx-6 lg:mx-8 italic`}>
        ryan.a.moises.adv@gmail.com
      </h1>
      
      {/* Navbar - hidden on small screens, visible on medium screens and up */}
      <div className='hidden md:flex items-center justify-center'>
        <Navbar />
      </div>
    </div>
    </>
  );
}

export default Header;