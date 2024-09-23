function Header() {
  return (
    <div className='header sticky top-0 container-fluid h-[8vh] relative bg-slate-800 opacity-100 z-50 py-10 flex items-center font-semibold italic'>
      <h1 className="text-4xl text-orange-500 mx-8">R. M.</h1>
      <div className="absolute right-0 mx-5">
        <a href="#about" className="mx-5 font-semibold">About</a>
        <a href="#skills" className="mx-5 font-semibold">Skills</a>
        <a href="#projects" className="mx-5 font-semibold">Projects</a>
        <a href="#footer" className="mx-5 font-semibold">Contact</a>
      </div>
    </div>
  );
}

{/* <div className="nav container m-4 border-white border-1 absolute bottom-0 right-0 text-right">
<a href="#about" className="font-semibold mx-5">About</a>
<a href="#skills" className="font-semibold mx-5">Skills</a>
<a href="#projects" className="font-semibold mx-5">Projects</a>
<a href="#footer" className="font-semibold mx-5">Contact</a>
</div> */}

export default Header;