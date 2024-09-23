import About from '../components/About'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Divider from '../components/Divider';

function HomePage() {

  return (
    <div className='bg-gray-700 text-amber-100'>
      <Header />
      <About />
      <Divider next={'skills'}/>
      <Skills />
      <Divider next={'projects'}/>
      <Projects />
      <Footer />
    </div>
  )
}

export default HomePage;