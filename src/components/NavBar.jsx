import { useTheme } from '../utils/ThemeContext';

function Navbar () {
  const { theme, toggleTheme } = useTheme();

  const navButtons = ["About", "Skills", "Projects", "Connect"]

  return (
    <>
      <div className="absolute right-0 mx-5">
        {navButtons.map((item, index) => (
          <a key={index} href={`#${item === "Connect" ? "footer" : item.toLowerCase()}`} className={`navBtn-${theme} mx-2 py-2 px-3 rounded`}>{item}</a>
          ))}
        <button className={`navBtn-${theme} mx-2 py-2 px-3 rounded`} onClick={toggleTheme}>Change Theme</button>
      </div>
    </>
  )
}

export default Navbar