import Navbar from "./components/Navbar"
import AboutMe from "./pages/AboutMe"
import Experience from "./pages/Experience"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
    </div>
  )
}

export default App
