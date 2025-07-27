import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import ScrollReveal from './components/animations/ScrollReveal'
import './App.css'
import './styles/global.css'

function App() {
  return (
    <>
      <div className="bg-animation"></div>
      <div className="app">
        <ScrollReveal />
        <Header />
        <main>
          <section id="home" className="hero">
            <Hero />
          </section>
          <section id="about" className="reveal">
            <h2 className="section-title">Sobre mí</h2>
            <About />
          </section>
          <section id="skills" className="reveal">
            <h2 className="section-title">Habilidades</h2>
            <Skills />
          </section>
          <section id="projects" className="reveal">
            <h2 className="section-title">Proyectos</h2>
            <Projects />
          </section>
          <section id="contact" className="reveal">
            <h2 className="section-title">Contacto</h2>
            <Contact />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
