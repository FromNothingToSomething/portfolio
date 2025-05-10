import React from 'react';
import Layout from './layout/Layout';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactSection from './pages/ContactSection';
import './styles/animations.css';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactSection />
    </Layout>
  );
}

export default App;