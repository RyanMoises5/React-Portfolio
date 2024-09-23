import { IoIosArrowDropdown } from "react-icons/io";

const Divider = function({ next }) {
  return (
    <>
      <div className="grid item-center">
        <a href={`#${next}`} className='h-100 justify-self-center mb-8' >
          <IoIosArrowDropdown size={40}/>
        </a>
        <div className="grow border-t-4 mx-10 border-gray-600"></div>
      </div>
    </>
  )
}

export default Divider;