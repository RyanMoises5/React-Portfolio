function Header() {
  return (
    <div className='header sticky top-0 container-fluid h-[8vh] bg-slate-800 opacity-100 z-50 py-10 flex items-center font-bold'>
      <h1 className="text-4xl text-orange-400 mx-8 italic">R. M.</h1>
      <div className="absolute right-0 mx-5">
        <a href="#about" className="mx-5 py-2 px-3 rounded hover:bg-amber-500 hover:text-slate-800">About</a>
        <a href="#skills" className="mx-5 py-2 px-3 rounded hover:bg-amber-500 hover:text-slate-800">Skills</a>
        <a href="#projects" className="mx-5 py-2 px-3 rounded hover:bg-amber-500 hover:text-slate-800">Projects</a>
        <a href="#footer" className="mx-5 py-2 px-3 rounded hover:bg-amber-500 hover:text-slate-800">Connect</a>
      </div>
    </div>
  );
}

export default Header;