const Divider = function({ next, prev }) {
  return (
    <>
      <div className="grid">
        <a href={`#${next}`} className='text-center mb-8' >Scroll next button here</a>
        <div className="grow border-t-4 mx-10 border-gray-600"></div>
        {/* <a href={`#${prev}`} className='text-center mt-8' >Scroll prev button here</a> */}
      </div>
    </>
  )
}

export default Divider;