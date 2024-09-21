import Navigation from './Navigation'

function Header() {
  return (
    <div className='container-fluid border-solid border-2 border-white my-2 flex'>
      <h1 className="text-4xl text-orange-600 p-3 text-nowrap">Ryan Moises</h1>
      <Navigation />
    </div>
  );
}

export default Header;