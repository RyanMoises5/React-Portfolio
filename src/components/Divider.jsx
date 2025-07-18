import { IoIosArrowDropdown } from "react-icons/io";
import { useTheme } from '../utils/ThemeContext';

const Divider = function({ next }) {
  const { theme } = useTheme();

  return (
    <>
      <div className="block grid item-center">
        <a href={`#${next}`} className='justify-self-center mb-8' >
          <IoIosArrowDropdown size={40}/>
        </a>
        <div className={`grow border-t-2 mx-10 border-${theme}-primary`}></div>
      </div>
    </>
  )
}

export default Divider;