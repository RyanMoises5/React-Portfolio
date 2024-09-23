import About from '../components/About'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer'
import Header from '../components/Header'

function HomePage() {

  return (
    <div className='text-amber-100'>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default HomePage;