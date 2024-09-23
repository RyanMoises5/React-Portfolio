import { IoIosArrowDropdown } from "react-icons/io";

const Divider = function({ next, prev }) {
  return (
    <>
      <div className="grid item-center">
        <a href={`#${next}`} className='h-100 justify-self-center mb-8' >
          <IoIosArrowDropdown size={40}/>
        </a>
        <div className="grow border-t-4 mx-10 border-gray-600"></div>
        {/* <a href={`#${prev}`} className='text-center mt-8' >Scroll prev button here</a> */}
      </div>
    </>
  )
}

export default Divider;