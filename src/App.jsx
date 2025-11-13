import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 50,
    })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
