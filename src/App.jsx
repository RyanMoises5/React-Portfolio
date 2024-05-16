import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
