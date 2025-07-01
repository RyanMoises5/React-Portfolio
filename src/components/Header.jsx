import { useTheme } from '../utils/ThemeContext';
import Navbar from './NavBar';

function Header() {
  const { theme, toggleTheme } = useTheme();

  // const navButtons = ["About", "Skills", "Projects", "Connect"]

  return (
    <>
    <div className={`header sticky top-0 container-fluid bg-${theme}-secondary opacity-100 z-40 py-4 flex items-center font-bold`}>
      <h1 className={`text-xl text-${theme}-accent mx-8 italic`}>ryan.a.moises.adv@gmail.com</h1>
      <Navbar />
      {/* <div className="absolute right-0 mx-5">
        {navButtons.map((item, index) => (
          <a key={index} href={`#${item === "Connect" ? "footer" : item.toLowerCase()}`} className={`navBtn-${theme} mx-5 py-2 px-3 rounded`}>{item}</a>
          ))}
        <button className={`navBtn-${theme} mx-5 py-2 px-3 rounded`} onClick={toggleTheme}>Change Theme</button>
      </div> */}
    </div>
    </>
  );
}

export default Header;