import Navigation from './Navigation'
// background-color: rgb(43, 55, 71);
function Header() {
  return (
    <div className='header sticky top-0 container-fluid h-[8vh] w-full relative bg-slate-800 opacity-100 z-50'>
      <h1 className="text-4xl text-orange-500 p-3 text-nowrap">Ryan Moises</h1>
      <Navigation />
    </div>
  );
}

export default Header;