import About from '../components/About'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Divider from '../components/Divider';
import { useTheme } from '../utils/ThemeContext';

function HomePage() {

  const { theme } = useTheme();

  return (
    <div className={`bg-${theme}-primary text-${theme}-primary`}>
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