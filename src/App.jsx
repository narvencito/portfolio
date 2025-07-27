import { useEffect } from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
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
        <Header />
        <main>
          <section id="home" className="hero">
            <Hero />
          </section>
          
          <ScrollReveal>
            <section id="about">
              <h2 className="section-title">Sobre mí</h2>
              <About />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="skills">
              <h2 className="section-title">Habilidades</h2>
              <Skills />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="projects">
              <h2 className="section-title">Proyectos</h2>
              <Projects />
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section id="contact">
              <h2 className="section-title">Contacto</h2>
              <Contact />
            </section>
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
